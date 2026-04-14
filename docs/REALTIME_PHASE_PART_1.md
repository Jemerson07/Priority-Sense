# Priority-Sense — Realtime phase split

## Part 1 — Event foundation
This part focuses on a stable event foundation without requiring live infrastructure yet.

### Files added in this phase
- `src/types/realtime.ts`
- `src/store/useRealtimeFeed.ts`
- `src/services/events/normalizeTicketEvent.ts`
- `src/data/mockRealtimeFeed.ts`

### What this solves
- defines the event contract for queue updates
- creates a lightweight event feed store with `zustand`
- normalizes raw payloads from future webhook or realtime sources
- provides a mock feed to validate the UI architecture before realtime is enabled

## Part 2 — Live sync application
This will come next and will focus on:
- dashboard refresh from event feed
- inbox refresh triggers
- event timeline UI
- Supabase realtime or n8n webhook bridge planning

## Current status
The project can now evolve with a clear event model instead of ad-hoc update logic.
