#!/bin/bash -eux


if [[ -f package-lock.json ]]; then
  echo "[ERROR] package-lock.json exists!"
  exit 1
fi

if [[ -f yarn.lock ]]; then
  echo "[ERROR] yarn.lock exists!"
  exit 1
fi

(cd packages/react-icons-refresh/ && pnpm run type-check)
time (cd packages/react-icons-refresh/ && pnpm run fetch)
time (cd packages/react-icons-refresh/ && pnpm run build)
echo VERSIONS; cat packages/react-icons-refresh/VERSIONS
(cd packages/_react-icons-refresh_all/ && npm pack 2>&1 | tail)
(cd packages/_react-icons-refresh_all-files/ && npm pack 2>&1 | tail)

(cd packages/preview-astro/ && pnpm run build)
(cd packages/demo/ && CI=true pnpm run test && pnpm run build)
(cd packages/webpack4-test/ && CI=true pnpm run test)
(cd packages/ts-test/ && SKIP_PREFLIGHT_CHECK=true pnpm run build)
