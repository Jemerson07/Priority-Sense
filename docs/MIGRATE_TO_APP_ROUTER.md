# Migrate Priority-Sense to the new app router structure

The repository now contains the complete page and layout structure for the next UI phase.

## What already exists
- src/app/router/AppRouter.tsx
- src/components/layout/AppLayout.tsx
- src/components/background/InteractiveBackground.tsx
- src/pages/Dashboard/DashboardPage.tsx
- src/pages/Inbox/InboxPage.tsx
- src/pages/Rules/RulesPage.tsx
- src/pages/Settings/SettingsPage.tsx
- src/pages/TicketDetail/TicketDetailPage.tsx
- src/styles/layout.css
- src/styles/page-shell.css

## Manual change required
Because the existing `src/App.tsx` was already created earlier, replace its current content with this:

```tsx
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './app/router/AppRouter';

export default function App() {
  return <RouterProvider router={appRouter} />;
}
```

## After replacing App.tsx
Run:

```bash
npm install
npm run dev
```

## Expected result
You will see the new application shell with sidebar, topbar, dashboard, inbox, rules, settings and ticket detail route scaffolds.
