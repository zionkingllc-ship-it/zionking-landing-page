# Ziona

**A Social Platform That Puts Christian Faith First.**

Ziona is a modern web application built by ZionKing LLC to foster a faith-centered community. It provides features for faith-based content discovery, community engagement (likes, comments, saves), and a "Faith Circle" for deeper fellowship.

## Tech Stack

This project is built with:

- **Frontend Framework:** React
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn-ui

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

You will need Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Bhuchee/Ziona-Waitlist.git
   ```

2. Navigate into the project directory:
   ```bash
   cd Ziona-Waitlist
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```
   *(Note: If `npm install` hangs or fails, you may try using an alternative package manager like `bun` or `yarn` if available, or try clearing your npm cache).*

### Running the Development Server

Start the development server:

```bash
npm run dev
```

Alternatively, if Vite is not running globally, you can run:
```bash
./node_modules/.bin/vite
```

The application will typically be available at `http://localhost:8080` or `http://localhost:5173`. Check your terminal output for the exact local address.

## Features

- **Faith-Centered Content Feed:** Discover and engage with Christian content.
- **Community Engagement Tools:** Interact with posts through likes, comments, and saves.
- **Faith Circle:** Specifically designed for deeper fellowship and connection.
- **Christian Moderation Standards:** Adheres to community guidelines that reflect Christian values.

## Contact Form

The contact form submits through the shared Ziona backend `submitContact` GraphQL mutation with `brand: ZIONKING`. Set `VITE_GRAPHQL_ENDPOINT` to override the production API endpoint (`https://api.ziona.app/graphql/`).

## Deployment Workflow

- Push feature work to `staging` first. CI runs lint, typecheck, tests, build, secret scanning, and a production dependency audit.
- Netlify's Git integration deploys the matching branch after GitHub receives the push. Optional deploy-hook mode is available through the GitHub `staging` and `Production` environments.
- Production is promoted only through a pull request from `staging` to `main`.
- Disable Netlify Git auto-publishing only when both deploy hooks are configured, preventing duplicate deployments.
