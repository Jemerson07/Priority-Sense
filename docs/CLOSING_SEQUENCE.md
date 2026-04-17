# Priority-Sense — Closing sequence

## Recommended order for final project closing

### 1. Route and page replacement
- switch `DashboardPage` to the operational home shell
- switch `InboxPage` to the inbox page composition
- switch `RulesPage` to the rules page composition
- switch `SettingsPage` to the settings page composition
- switch `TicketDetailPage` to the ticket detail page composition
- decide whether the public entry route uses the auth entry shell

### 2. Shared style verification
- confirm component-level stylesheet imports
- confirm layout and page shell styles remain active
- verify responsive behavior across dashboard and inbox areas

### 3. Data source migration
- replace mocks with React Query powered reads where ready
- preserve Zustand for local interaction state
- keep repository fallback until infrastructure is stable

### 4. Infrastructure activation
- install Supabase SDK locally
- configure `.env`
- apply `supabase/schema.sql`
- validate mapper and webhook contract for n8n

### 5. UI validation
- verify empty, loading and normal states
- verify navigation between routes
- verify desktop and mobile layouts
- verify visual consistency across modules

## Final outcome
After this sequence, Priority-Sense should move from modular scaffold to a coherent operational product shell ready for live integrations.
