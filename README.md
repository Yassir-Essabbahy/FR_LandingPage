# VR Boost Front-End Prototype

VR Boost is a front-end-only React/Vite prototype for a virtual real estate staging product. It combines a public landing page with a copied dashboard experience and a Hub & Avatar page for guided remote property visits.

There is no backend, database, authentication, or API integration in this version. All pages use static mock data, external image URLs, and client-side routing based on the browser path.

## Pages

### Landing Page

Route: `/`

The landing page introduces the VR Boost product and includes:

- Hero section with primary CTAs
- Benefits for home staging, Hub & Avatar, agencies, and furniture brands
- Fake project creation form
- Style selector for staging concepts
- Optional project preview section after clicking `Generate Preview`
- Links to the dashboard and Hub & Avatar page

### Dashboard

Route: `/dashboard`

The dashboard was copied from the `fusion-starter-77b` folder and adapted to run inside this Vite app without React Router or backend dependencies.

It includes:

- Glass-style dashboard shell
- Sidebar navigation
- Static statistics cards
- Latest visits list
- User/avatar mock data
- Link back to the landing page
- Link to the Hub & Avatar page

### Hub & Avatar

Route: `/hub-avatar`

The Hub & Avatar page is a front-end-only page styled to match the dashboard.

It includes:

- Hub session overview
- Active hub/avatar/message metrics
- Featured guided visit preview
- Upcoming sessions
- Avatar presets
- Links back to the dashboard and landing page

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React icons

## Project Structure

```text
src/
  App.tsx                         Main app, landing page, simple route switch
  main.tsx                        React entry point
  index.css                       Tailwind layers and shared glass/dashboard styles
  components/
    Dashboard.tsx                 Copied/adapted dashboard page
    HubAvatar.tsx                 Hub & Avatar page
    Navbar.tsx                    Landing page navigation
    SectionWrapper.tsx            Reusable landing section wrapper
  data/
    mock-data.ts                  Landing navbar link data
  hooks/
    useInView.ts                  Existing animation/view hook
```

## Routing

This project does not use `react-router-dom`. Routing is intentionally simple:

- `App.tsx` checks `window.location.pathname`
- `/dashboard` renders the dashboard page
- `/hub-avatar` renders the Hub & Avatar page
- every other path renders the landing page

This keeps the prototype front-end-only and avoids adding routing dependencies.

## Styling

The site uses a shared dashboard-inspired palette:

- Soft blue/lavender gradient background
- Charcoal text
- Muted blue-gray secondary text
- Glass panels with translucent white backgrounds
- Blue-gray accents and borders

The palette is defined in:

```text
tailwind.config.js
```

Shared glass styles are defined in:

```text
src/index.css
```

Important utility classes:

- `dashboard-bg` - shared gradient background
- `glass-panel` - translucent glass surface
- `glass-panel-strong` - stronger active glass surface
- `section-padding` - shared landing page horizontal padding

## Getting Started

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

If PowerShell blocks `npm.ps1`, use:

```bash
npm.cmd run dev
```

Open:

```text
http://127.0.0.1:5173
```

## Available Scripts

Run local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Important URLs

```text
/             Landing page
/dashboard    Dashboard page
/hub-avatar   Hub & Avatar page
```

## Notes

- The dashboard images and logo are loaded from external Builder.io URLs.
- Landing page images are loaded from Unsplash.
- All project, visit, avatar, and session content is mock data.
- The app is suitable as a visual/prototype front end, not a production app yet.

## Future Improvements

- Add a real router if the page count grows.
- Replace external mock images with local assets.
- Connect project creation to a backend.
- Add authentication for dashboard access.
- Store visits, sessions, avatars, and furniture catalog data in an API.
- Add responsive visual QA across more mobile screen sizes.
