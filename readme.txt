###############################################################################
# 0. Global tooling – only once per machine
###############################################################################
npm   i -g pnpm                         # fast monorepo‑friendly package mgr
pnpm  i -g vercel                      # Vercel CLI for local → prod deploys :contentReference[oaicite:0]{index=0}

###############################################################################
# 1. Create the Next.js 15 web storefront
###############################################################################
pnpm create next-app@latest my‑store -- \
  --typescript --tailwind --eslint --app --src-dir

cd my‑store

###############################################################################
# 2. Install project dependencies
###############################################################################
pnpm add stripe @stripe/stripe-js          # server + browser SDKs (API 2025‑03‑31) :contentReference[oaicite:1]{index=1}
pnpm add firebase                          # modular Firebase v10+
pnpm add -D @types/stripe-v3               # (optional) extra TS helpers

###############################################################################
# 3. Boot local dev & first deploy
###############################################################################
pnpm dev                                   # http://localhost:3000
vercel link                                # one‑time: connect directory ↔ Vercel project
vercel --prod                              # deploy to production DNS
