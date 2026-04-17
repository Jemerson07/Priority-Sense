# Priority-Sense — Assisted page wrappers

## Purpose
These wrappers exist to make the final route replacement even safer than using finalizers directly.

## Files added
- `src/finalizers/page-wrappers/DashboardPageWrapper.tsx`
- `src/finalizers/page-wrappers/InboxPageWrapper.tsx`
- `src/finalizers/page-wrappers/RulesPageWrapper.tsx`
- `src/finalizers/page-wrappers/SettingsPageWrapper.tsx`
- `src/finalizers/page-wrappers/TicketDetailPageWrapper.tsx`
- `src/finalizers/page-wrappers/AuthPageWrapper.tsx`

## How to use later
During the closing pass, a temporary route page can be replaced by one of these wrappers with almost no logic.

## Why this helps
- reduces closing-pass risk
- keeps final page files tiny
- avoids accidental mock wiring mistakes
- preserves the modular structure built during the repository phase
