# Priority-Sense — Responsive and state validation

## Responsive checkpoints

### Desktop
- sidebar and topbar remain balanced
- dashboard cards align without awkward stretching
- inbox list/detail split remains usable
- settings and rules two-column layouts remain readable

### Tablet
- layout stacks gracefully where needed
- metric grids move from four columns to two columns
- inbox workspace becomes comfortable without horizontal overflow
- alert and insight panels still maintain hierarchy

### Mobile
- action buttons stack correctly
- cards and pills avoid clipping
- auth layout becomes one column
- filter controls stack vertically
- ticket detail cards move to one column

## State validation

### Empty states
- use `EmptyState` when a queue, section or selection is missing
- confirm the message tone stays operational and clear

### Loading states
- use `LoadingState` during query transitions
- confirm spacing and rhythm match the surface-card language

### Fallback states
- when live data fails, mock or fallback paths should not break layout
- confirm the repository fallback still renders coherent operational screens

## Final QA recommendation
Validate every major route in three modes:
1. normal populated data
2. empty state
3. loading or fallback state
