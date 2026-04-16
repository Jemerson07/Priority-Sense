# Priority-Sense — Dashboard home composition

## Goal
Create one final composition layer for the dashboard homepage without forcing immediate rewiring of the existing page file.

## Files added in this step
- `src/components/dashboard/DashboardHomeComposition.tsx`
- `src/data/dashboardHomeMock.ts`

## What this solves
- unifies overview metrics, realtime activity and operational insights
- creates a single entry point for the future dashboard homepage
- keeps the migration to the real `DashboardPage` simple for the closing pass

## Expected final composition
The dashboard homepage should render:
- `DashboardHomeComposition`
  - `DashboardOverviewPanel`
  - `DashboardOperationsSection`

## Future source replacement
Later this composition should receive:
- metrics from aggregation hooks
- events from realtime feed state
- insights from computed queue analytics
