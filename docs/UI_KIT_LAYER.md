# Priority-Sense — UI kit layer

## Goal
Provide a small reusable UI kit to reduce duplication during the final integration pass.

## Files added in this step
- `src/components/ui/SectionCard.tsx`
- `src/components/ui/EmptyState.tsx`
- `src/components/ui/LoadingState.tsx`
- `src/styles/ui-kit.css`

## What this solves
- reusable section wrapper for consistent content blocks
- reusable empty state for pages waiting for data
- reusable loading state for async query transitions
- shared visual language for future final wiring

## Recommended usage
- use `SectionCard` for dashboard, inbox and settings supporting blocks
- use `EmptyState` for missing ticket or empty queue views
- use `LoadingState` for query-driven pages during fetch
