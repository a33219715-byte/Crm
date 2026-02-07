# urleads Frontend

Responsive web front end for urleads, an AI Sales Assistant and Manager.

## Features

- **Landing Page**: Modern hero section, features grid, and trusted logos.
- **Sign In**: Role-based access (Company/Personal) toggle.
- **Dashboard**: Onboarding setup checklist, CRM connection, Messaging channels integration, Sales apps, and Team management.
- **Responsive Design**: Built with Tailwind CSS for mobile-first responsiveness.
- **No Backend**: Auth session and onboarding state persisted in `localStorage`.

## Tech Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- React Router

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

1.  Clone the repository.
2.  Install dependencies:

    ```bash
    npm install
    ```

### Running Locally

Start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
```

The output will be in the `dist` directory.

## Project Structure

- `src/components/ui`: Reusable UI components (Button, Input, Card, etc.).
- `src/components/dashboard`: Dashboard-specific components.
- `src/context`: React Context providers (AuthContext).
- `src/pages`: Main page components (Landing, SignIn, Dashboard, About).
- `src/lib`: Utility functions.
