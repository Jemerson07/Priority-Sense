# Priority-Sense — Operational home shell

## Goal
Create the final shell for the operational homepage without forcing immediate rewiring of the existing dashboard page.

## Files added in this step
- `src/components/dashboard/OperationalHomeShell.tsx`
- `src/data/operationalHomeMock.ts`

## What this solves
- unifies overview, operations and attention layers
- provides one final composition target for the dashboard homepage
- keeps the closing migration simple

## Current composition
- `DashboardHomeComposition`
- `DashboardAttentionSection`

## Future move
Later, the dashboard page should render `OperationalHomeShell` using:
- aggregated metrics
- realtime feed events
- computed queue insights
- live alerts and trends
