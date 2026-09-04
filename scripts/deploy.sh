#!/usr/bin/env bash
# Build the site and publish ONLY the contents of dist/ to the gh-pages branch.
set -euo pipefail
cd "$(dirname "$0")/.."

npm run build
REMOTE=$(git remote get-url origin)
SHA=$(git rev-parse --short HEAD)
TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT

cp -r dist/. "$TMP"/
cd "$TMP"
git init -q -b gh-pages
git add -A
git -c user.name="$(git -C "$OLDPWD" config user.name)" -c user.email="$(git -C "$OLDPWD" config user.email)" \
  commit -q -m "Deploy site from $SHA"
git push -f "$REMOTE" gh-pages:gh-pages
echo "Deployed $SHA to gh-pages"
