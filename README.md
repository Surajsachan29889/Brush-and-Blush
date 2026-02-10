# Seema's Brush & Blush

Next.js landing page for Seema's Brush & Blush — Kanpur home salon (makeup, hair, spa).

## Setup

```bash
npm install
```

## Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React** (icons)

Main UI lives in `src/components/SeemaLanding.tsx`; the home route renders it in `src/app/page.tsx`.

## Deploy on Netlify

This app uses **static export** (`output: "export"`) so you can deploy with the CLI without the Next.js runtime.

**Deploy from CLI:**

```bash
# One-time: install CLI and log in
npm install -g netlify-cli
netlify login

# Build and deploy
npm run build
netlify deploy --dir=out --prod
```

First run: if the folder isn’t linked, use `netlify deploy --dir=out --prod --create-site seema-brush-blush` to create a site, then use `netlify deploy --dir=out --prod` for later deploys.

**Live site:** [https://seema-brush-blush.netlify.app](https://seema-brush-blush.netlify.app)

**Git deploy:** Push to GitHub/GitLab and connect the repo in the Netlify dashboard; `netlify.toml` will be used (build: `npm run build`, publish: `out`).
# Brush-and-Blush
