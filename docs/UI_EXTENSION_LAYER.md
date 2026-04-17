# Priority-Sense — UI extension layer

## Purpose
These small UI pieces exist to support the final integration phase with clearer operational states.

## Files added
- `src/components/ui/OperationalStatusPill.tsx`
- `src/components/ui/IntegrationFallbackCard.tsx`
- `src/components/ui/QueueBlankState.tsx`
- `src/styles/ui-extensions.css`

## Recommended use
- use `OperationalStatusPill` for concise health and connector states
- use `IntegrationFallbackCard` when live integration is not yet active
- use `QueueBlankState` when filtered or realtime queues return no visible tickets

## Why this matters
These pieces reduce ad-hoc fallback messaging and keep the product shell visually consistent during the closing pass and early live integration phase.
