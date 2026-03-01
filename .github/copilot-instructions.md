# Copilot Instructions

## Project Overview

This is a Next.js web application that provides a server-side factorial calculator. Users enter a number (0–20) in the browser, and the result is computed by a Next.js API route.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (Pages Router)
- **UI**: React (functional components with hooks)
- **Runtime**: Node.js
- **Deployment**: Vercel

## Project Structure

```
pages/
  index.js          # Main UI page
  api/
    calculate.js    # API route: GET /api/calculate?n=<number>
public/             # Static assets
```

## Development

```bash
npm install        # Install dependencies
npm run dev        # Start development server at http://localhost:3000
npm run build      # Build for production
npm start          # Start production server
```

## Code Conventions

- Use functional React components with hooks (no class components).
- API routes live in `pages/api/` and export a default `handler(req, res)` function.
- Inline styles are used for UI components (no CSS modules or Tailwind).
- Keep API input validation strict and return descriptive error messages with appropriate HTTP status codes.
- The factorial API only accepts integers in the range 0–20 to avoid overflow with standard JavaScript numbers.

## Testing

There is currently no automated test suite. When adding tests, place them alongside the files they cover (e.g., `pages/api/calculate.test.js`) and use a framework consistent with the existing dependencies.
