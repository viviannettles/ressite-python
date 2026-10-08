#!/bin/bash
set -eu

# builds Angular frontend, copies it into backend/static, and runs the Flask app locally

ROOT="$(cd "$(dirname "$0")/.." && pwd)"

echo "**********BEGINNING local-build.sh**********"

cd "$ROOT/frontend"

ng build

rm -rf "$ROOT/backend/static/browser"
cp -r dist/app/. "$ROOT/backend/static"

cd "$ROOT/backend"

pip install -r "$ROOT/requirements.txt"

echo "**********STARTING SERVER (Ctrl+C to stop)**********"

python main.py