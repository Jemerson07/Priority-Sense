# Priority-Sense — Style and import audit

## Goal
Prevent closing-pass regressions caused by missing component imports or stylesheet references.

## Dashboard-related styles/components
- `OverviewMetricsGrid` used by dashboard overview
- `RealtimeActivityPanel` should load `realtime-feed.css`
- `InsightsOverviewSection` should rely on `insight-groups.css`
- `AlertsPanel` and `QueueTrendsPanel` should load `alerts-panel.css`

## Inbox-related styles/components
- `TicketDetailPanel` should load `ticket-detail-panel.css`
- `InboxWorkspaceShell` should load `inbox-workspace.css`
- `InboxQuickSummary` should load `inbox-quick-summary.css`
- `TicketFilterBar` should load `filter-bar.css`

## Rules-related styles/components
- `RuleCard` and `ScoreBandsPanel` should load `rules-page.css`

## Settings-related styles/components
- `ConnectorCard` and `EnvironmentVariablesPanel` should load `settings-page.css`

## Shared UI styles/components
- `SectionCard`, `EmptyState`, `LoadingState` should load `ui-kit.css`
- `AuthEntryShell` should use `auth-shell.css`

## Audit during closing pass
- verify each final composition imports the components it needs
- verify each component-level stylesheet is still referenced somewhere active
- verify no page depends on a stylesheet that was renamed during connector workarounds
