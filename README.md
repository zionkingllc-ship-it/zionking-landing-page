# ZionKing Landing Page

Official landing page for **ZionKing LLC** — a faith-rooted technology company. Inspired by John 1:5.

## About

ZionKing LLC builds innovative software solutions including **Ziona**, A social media platform for the Christians.

**Website**: [https://zionking.org](https://zionking.org)  
**Contact**: [info@zionking.org](mailto:info@zionking.org)

## Tech Stack

- [Vite](https://vitejs.dev/) – Build tool
- [React](https://react.dev/) – UI framework
- [TypeScript](https://www.typescriptlang.org/) – Type safety
- [Tailwind CSS](https://tailwindcss.com/) – Styling
- [shadcn/ui](https://ui.shadcn.com/) – Component library

## Local Development

### Prerequisites
- Node.js ≥ 18 and npm installed – [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Setup

```sh
# 1. Clone the repository
git clone https://github.com/zionkingllc-ship-it/zionking-landing-page.git

# 2. Navigate into the project
cd zionking-landing-page

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

The app will be available at `http://localhost:8080`.

## Deployment

This site is deployed on **Netlify** with automatic CI/CD from the `main` branch.

| Setting        | Value           |
|----------------|-----------------|
| Build command  | `npm run build` |
| Publish dir    | `dist`          |

### Contact Form

The contact form submits through the shared Ziona backend `submitContact` GraphQL mutation with `brand: ZIONKING`. Set `VITE_GRAPHQL_ENDPOINT` when you need to override the default production API endpoint (`https://api.ziona.app/graphql/`).

## Deployment Workflow

- Push feature work to `staging` first. CI runs lint, typecheck, tests, build, secret scanning, and a production dependency audit.
- A successful `staging` push is deployed by Netlify's Git integration; when configured, the workflow uses the staging deploy hook instead.
- Production is promoted only through a pull request from `staging` to `main`.
- A successful `main` push is deployed by Netlify's Git integration; when configured, the workflow uses the production deploy hook instead.
- By default, Netlify's Git integration deploys the matching branch after GitHub receives the push. Optional deploy-hook mode is available by setting `NETLIFY_STAGING_DEPLOY_HOOK_URL` in the GitHub `staging` environment and `NETLIFY_PRODUCTION_DEPLOY_HOOK_URL` in the `Production` environment.
- Disable Netlify Git auto-publishing only when both deploy hooks are configured, preventing duplicate deployments.

## Project Structure

```
src/
├── components/        # Page sections & UI components
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── FoundationSection.tsx
│   ├── WhatWeDoSection.tsx
│   ├── ZionaSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── pages/
│   └── Index.tsx      # Main page
└── main.tsx
```

## License

© 2025 ZionKing LLC. All rights reserved.
