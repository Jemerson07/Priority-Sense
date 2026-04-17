# Priority-Sense — Closing implementation guide

## Purpose
This guide defines how to perform the final page replacement pass without rethinking architecture decisions.

## Replacement pattern
Each route page should become a very small wrapper that imports the final composition and passes either mock data or live data.

## Example structure
A closing-pass page should follow this pattern:

```tsx
import { FinalComposition } from 'target-component';
import { targetMock } from 'target-mock';

export function SomePage() {
  return <FinalComposition {...targetMock} />;
}
```

## Recommended order
1. Dashboard page
2. Inbox page
3. Rules page
4. Settings page
5. Ticket detail page
6. Entry/auth page if needed

## Data strategy during closing
- use mock-based composition first
- confirm visual integrity
- migrate to query-driven data second
- keep fallback behavior active while infrastructure is being validated

## Important note
The project has intentionally been built in modular layers so that the closing pass should be mostly a wrapper replacement exercise rather than a redesign.
