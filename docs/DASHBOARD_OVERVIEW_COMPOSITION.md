# Priority-Sense — Dashboard overview composition

## Goal
Provide one reusable composition block that combines operational metrics and live activity.

## Files added in this step
- `src/components/dashboard/DashboardOverviewPanel.tsx`
- `src/data/dashboardOverviewMock.ts`

## What this gives the project
- one dashboard composition entry point
- a stable mock source for combined dashboard rendering
- easier future migration from mocks to React Query + realtime feed state

## Current architecture benefit
The dashboard can now be assembled from modular layers instead of one large page component:
- overview metrics grid
- realtime activity panel
- optional queue insights panels

## Future connection
Later, this composition should receive:
- aggregated metrics from query hooks
- recent events from realtime feed state
- dynamic queue indicators driven by ticket changes
