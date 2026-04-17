# Priority-Sense — Finalizer wrappers guide

## Purpose
These wrappers were created to make the closing pass safer and more mechanical.

## Files added
- `src/finalizers/dashboardFinalizer.tsx`
- `src/finalizers/inboxFinalizer.tsx`
- `src/finalizers/rulesFinalizer.tsx`
- `src/finalizers/settingsFinalizer.tsx`
- `src/finalizers/ticketDetailFinalizer.tsx`

## How to use later
During the final route replacement pass, each temporary page can be simplified to return its corresponding finalizer.

## Benefit
This avoids large page rewrites during the closing pass. The route pages can become tiny wrappers over the finalizers, and the finalizers already know which composition and mock data to use.
