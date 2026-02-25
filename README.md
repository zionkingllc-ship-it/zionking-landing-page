# ZionKing Landing Page

Official landing page for **ZionKing LLC** — a faith-rooted technology company. Inspired by John 1:5.

## About

ZionKing LLC builds innovative software solutions including **Ziona**, an AI-powered app to help people discover and book professionals based on faith, values, and community.

**Website**: [https://zionking.netlify.app](https://zionking.netlify.app)  
**Contact**: [Zionkingllc@gmail.com](mailto:Zionkingllc@gmail.com)

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

The contact form uses **Netlify Forms** — no backend required. Submissions are captured automatically by Netlify and can be viewed in the Netlify dashboard under **Forms → contact**.

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
