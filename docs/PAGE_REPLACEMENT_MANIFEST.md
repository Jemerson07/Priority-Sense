# Priority-Sense — Page replacement manifest

## Final composition targets by page

### Dashboard page
Temporary target: `src/pages/Dashboard/DashboardPage.tsx`
Final composition target: `src/components/dashboard/OperationalHomeShell.tsx`
Primary mock source: `src/data/operationalHomeMock.ts`

### Inbox page
Temporary target: `src/pages/Inbox/InboxPage.tsx`
Final composition target: `src/components/inbox/InboxPageComposition.tsx`
Primary mock source: `src/data/inboxViewMock.ts`

### Rules page
Temporary target: `src/pages/Rules/RulesPage.tsx`
Final composition target: `src/components/rules/RulesPageComposition.tsx`
Primary mock source: `src/data/rulesPageMock.ts`

### Settings page
Temporary target: `src/pages/Settings/SettingsPage.tsx`
Final composition target: `src/components/settings/SettingsPageComposition.tsx`
Primary mock source: `src/data/settingsPageMock.ts`

### Ticket detail page
Temporary target: `src/pages/TicketDetail/TicketDetailPage.tsx`
Final composition target: `src/components/inbox/TicketDetailPageComposition.tsx`
Primary mock source: `src/data/inboxWorkspaceMock.ts`

### Entry page
Candidate final composition target: `src/components/auth/AuthEntryShell.tsx`
Style target: `src/styles/auth-shell.css`

## Why this manifest exists
This file reduces friction during the closing pass by clearly mapping each temporary route file to its intended final composition.
