import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from '../../components/layout/AppLayout';
import { DashboardPage } from '../../pages/Dashboard/DashboardPage';
import { InboxPage } from '../../pages/Inbox/InboxPage';
import { RulesPage } from '../../pages/Rules/RulesPage';
import { SettingsPage } from '../../pages/Settings/SettingsPage';
import { TicketDetailPage } from '../../pages/TicketDetail/TicketDetailPage';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'inbox', element: <InboxPage /> },
      { path: 'rules', element: <RulesPage /> },
      { path: 'settings', element: <SettingsPage /> },
      { path: 'tickets/:ticketId', element: <TicketDetailPage /> },
    ],
  },
]);
