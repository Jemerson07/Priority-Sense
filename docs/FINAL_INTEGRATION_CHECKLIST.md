# Priority-Sense — Final integration checklist

This checklist is intentionally reserved for the project closing pass, since the implementation has been progressing without immediate manual intervention.

## Router and page wiring
- Replace the temporary dashboard page content with `OperationalHomeShell`
- Replace the temporary inbox page content with `InboxPageComposition`
- Replace the temporary rules page content with `RulesPageComposition`
- Replace the temporary settings page content with `SettingsPageComposition`
- Replace the temporary ticket detail page content with `TicketDetailPageComposition`
- Decide whether the login route should render `AuthEntryShell`

## Style imports to verify
- ensure `auth-shell.css` is imported where `AuthEntryShell` is used
- ensure `ticket-detail-panel.css` is imported in ticket detail usage
- ensure `inbox-workspace.css` and `inbox-quick-summary.css` are loaded in inbox composition
- ensure `rules-page.css`, `settings-page.css`, `alerts-panel.css`, `realtime-feed.css`, `insight-groups.css` are loaded through the components that use them

## Data migration
- replace final mocks with query-driven sources
- keep local UI state in Zustand
- keep server state in React Query
- switch dashboard metrics to aggregation hooks
- switch inbox ticket list to filtered query + store selection

## Infrastructure
- install `@supabase/supabase-js`
- configure `.env`
- apply `supabase/schema.sql`
- connect n8n webhook payloads to the mapper flow

## Final QA
- validate layout on desktop and mobile breakpoints
- validate route transitions
- validate empty states and fallback behavior
- validate connector cards and settings messaging
