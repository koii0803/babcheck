#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""gindex.py — 오늘 공개된 글 주소를 Google Indexing API에 알린다 (babcheck 전용).
새벽 daily-rebuild가 예약 글을 공개한 뒤 돌린다. 발행 시점엔 글이 아직 없으니 그때 부르면 안 된다.

사용:
  gindex.py                 오늘(KST) pubDate 글
  gindex.py --date D        그 날짜 글
  gindex.py --slug S [S..]  지정 글만
  gindex.py --dry           보내지 않고 목록만

비밀값: 환경변수 GOOGLE_INDEXING_KEY = 서비스 계정 JSON 내용 통째로. 파일에 안 적는다.
그 서비스 계정 이메일이 서치콘솔 babcheck.com 소유자여야 한다.
공개 확인: 주소가 200이 아니면 보내지 않고 건너뛴다(구글이 404를 보면 손해).
"""
import argparse, datetime as dt, json, os, re, sys
from pathlib import Path

sys.stdout.reconfigure(encoding="utf-8")
sys.stderr.reconfigure(encoding="utf-8")

ROOT = Path(__file__).resolve().parents[1]          # babcheck/
POSTS = ROOT / "src" / "content" / "posts"
SITE = "https://babcheck.com"
API = "https://indexing.googleapis.com/v3/urlNotifications:publish"
KST = dt.timezone(dt.timedelta(hours=9))

def today_kst():
    return dt.datetime.now(KST).date().isoformat()

def front(path):
    t = path.read_text(encoding="utf-8")
    m = re.match(r"^---\n(.*?)\n---", t, re.S)
    if not m: return {}
    fm = {}
    for line in m.group(1).splitlines():
        k, _, v = line.partition(":")
        fm[k.strip()] = v.strip().strip('"')
    return fm

def pick(date, slugs):
    out = []
    for p in sorted(POSTS.glob("*.md")):
        fm = front(p)
        if fm.get("draft") == "true": continue
        if slugs and p.stem not in slugs: continue
        if not slugs and fm.get("pubDate") != date: continue
        out.append(f"{SITE}/posts/{p.stem}")
    return out

def live(url):
    import requests
    try:
        return requests.head(url, timeout=30, allow_redirects=True).status_code == 200
    except Exception:
        return False

def session():
    key = os.environ.get("GOOGLE_INDEXING_KEY")
    if not key: sys.exit("환경변수 GOOGLE_INDEXING_KEY 없음")
    from google.oauth2 import service_account
    from google.auth.transport.requests import AuthorizedSession
    creds = service_account.Credentials.from_service_account_info(
        json.loads(key), scopes=["https://www.googleapis.com/auth/indexing"])
    return AuthorizedSession(creds)

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--date")
    ap.add_argument("--slug", nargs="*")
    ap.add_argument("--dry", action="store_true")
    a = ap.parse_args()
    urls = pick(a.date or today_kst(), a.slug)
    if not urls:
        print("보낼 글 없음"); return
    if a.dry:
        print("\n".join(urls)); return
    s = session()
    fail = 0
    for u in urls:
        if not live(u):
            print(f"건너뜀(아직 안 열림): {u}"); fail += 1; continue
        r = s.post(API, json={"url": u, "type": "URL_UPDATED"}, timeout=60)
        ok = r.status_code == 200
        print(("보냄: " if ok else f"실패 {r.status_code}: ") + u + ("" if ok else " " + r.text[:200]))
        fail += 0 if ok else 1
    sys.exit(1 if fail else 0)

if __name__ == "__main__":
    main()
