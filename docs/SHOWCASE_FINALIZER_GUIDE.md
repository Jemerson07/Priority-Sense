# Priority-Sense — Showcase finalizer guide

## Purpose
The showcase finalizer exists to validate the final compositions in one place before the closing route replacement pass.

## Files added
- `src/finalizers/authFinalizer.tsx`
- `src/finalizers/showcaseFinalizer.tsx`

## What this enables
- a finalizer for the auth entry shell
- one compact internal showcase for the major operational compositions
- faster visual verification before replacing the route pages

## Suggested use
Use the showcase only as an internal validation surface. It is not meant to replace the product router structure; it is meant to accelerate the final verification pass.
