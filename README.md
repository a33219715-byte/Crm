# urleads - AI Sales Assistant & Manager

A modern, responsive web frontend for **urleads**, an AI-powered sales assistant designed to streamline lead management, automate follow-ups, and integrate seamlessly with your CRM and messaging channels.

## 🚀 Features

### Public Pages
- **Landing Page**: Engaging hero section, "How it Works", feature grid, and trust indicators.
- **About Us**: Mission statement, product capabilities, and example use cases.
- **Sign In**: Split-screen layout with Company/Personal login toggle.

### Dashboard (Protected)
- **Onboarding Checklist**: Dismissible banner guiding users through setup (persisted locally).
- **CRM Integration**: Connect HubSpot, Salesforce, or custom APIs (mock UI).
- **Messaging Channels**: Configure WhatsApp and Telegram bots.
- **Sales Apps**: Integrate tools like Home Finder or custom inventory APIs.
- **Team Management**: Invite members and assign roles (Admin, Manager, Rep).

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (Inter font, Sky Blue accent)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Icons**: [Material Symbols](https://fonts.google.com/icons)

## 📦 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (or yarn/pnpm)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/urleads-frontend.git
    cd urleads-frontend
    ```

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

Create an optimized build in the `dist` directory:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

## 🔐 Mock Authentication

Since there is no backend, authentication is simulated using `localStorage`.
- **Email**: Any valid email format (e.g., `admin@urleads.com`)
- **Password**: Any non-empty string
- **Session**: Persisted in browser storage (`saleai_session`).

## ☁️ Deployment

This project is configured for easy deployment on **Render** as a Static Site.

1.  Connect your repository to Render.
2.  Select "Static Site".
3.  Use the following settings (pre-configured in `render.yaml`):
    - **Build Command**: `npm install && npm run build`
    - **Publish Directory**: `dist`
    - **Rewrite Rules**: All routes `/*` rewrite to `/index.html` (for SPA routing).

Alternatively, you can use the `render.yaml` Blueprint spec.

## 📂 Project Structure

```
src/
├── components/
│   ├── dashboard/   # Dashboard-specific widgets (Onboarding, Stats)
│   └── ui/          # Reusable UI kit (Button, Card, Input, Layout)
├── context/         # React Context (AuthContext)
├── pages/           # Route components (Landing, SignIn, Dashboard, About)
└── lib/             # Utilities (cn helper)
```

## 🎨 Design System

- **Primary Color**: Sky Blue (`#0ea5e9` / `text-primary`)
- **Background**: White / Light Gray (`bg-background-light`)
- **Typography**: Inter (Google Fonts)
- **Philosophy**: Minimalist, high whitespace, rounded corners, soft shadows.

---

© 2023 urleads Inc.
