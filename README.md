# Restaurant EMP

Restaurant EMP is a production-ready enterprise management platform for multi-branch restaurant chains. The starter includes:

- Executive dashboard and analytics overview
- Branch management API endpoints
- Authentication and authorization foundation
- Prisma schema for organizations, branches, employees, inventory, orders, reservations, and attendance
- Responsive UI built with Next.js and Tailwind CSS

## Architecture

- Frontend: Next.js + React + TypeScript + Tailwind CSS
- Backend: Next.js route handlers
- Data layer: Prisma + PostgreSQL
- Auth: JWT-based mock authentication for the starter

## Getting started

1. Install dependencies
   ```bash
   npm install
   ```
2. Create a PostgreSQL database and set DATABASE_URL in .env
3. Run Prisma generate and migrate
   ```bash
   npm run prisma:generate
   npm run prisma:migrate
   ```
4. Start the app
   ```bash
   npm run dev
   ```

## Deployment

The app is container-ready and can be deployed with Docker or any Node.js hosting provider.
