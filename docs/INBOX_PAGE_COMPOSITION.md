# Priority-Sense — Inbox page composition

## Goal
Create the final operational composition for the inbox page without rewiring the existing route immediately.

## Files added in this step
- `src/components/inbox/InboxQuickSummary.tsx`
- `src/components/inbox/InboxPageComposition.tsx`
- `src/styles/inbox-quick-summary.css`
- `src/data/inboxViewMock.ts`

## What this solves
- adds a quick queue summary above the inbox workspace
- creates one composition entry point for the inbox page
- keeps the closing migration to the real page straightforward

## Expected composition
- `InboxQuickSummary`
- `InboxWorkspaceShell`

## Future source replacement
Later this composition should receive:
- filtered tickets from query + store
- selected ticket from route/store state
- live queue updates from realtime events
