# Priority-Sense — Handoff guide

## Purpose
This document exists to make the transition from repository build phase to manual closing phase straightforward.

## What is already ready
- modular product compositions are built
- mock-driven operational shells are built
- finalizer wrappers are built
- closing documentation is available
- QA checklists and audit guides are available

## What the handoff receiver should do next
1. review `GITHUB_BUILD_INVENTORY.md`
2. review `PAGE_REPLACEMENT_MANIFEST.md`
3. review `FINAL_INTEGRATION_CHECKLIST.md`
4. review `DEFERRED_MANUAL_ACTIONS.md`
5. execute the closing sequence in `CLOSING_SEQUENCE.md`

## Recommended practical order
- validate the showcase finalizer
- replace route pages with finalizers or final compositions
- confirm stylesheets and imports
- activate environment and infrastructure
- run responsive and state QA

## Important note
The repository was intentionally evolved through modular layers and split operations. The closing pass should therefore focus on controlled wiring rather than rebuilding anything.
