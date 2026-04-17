# Priority-Sense — Repository architecture map

## Current feature layers

### Dashboard
- overview metrics grid
- realtime activity panel
- operational insights section
- alerts and trends section
- operational home shell

### Inbox
- ticket summary cards
- ticket detail panel
- inbox workspace shell
- inbox page composition
- quick queue summary

### Rules
- rule cards
- score bands panel
- rules page composition

### Settings
- connector cards
- environment variables panel
- settings page composition

### Shared UI
- section card
- empty state
- loading state
- priority badge
- filter bar

## Data and state layers
- mock ticket dataset
- ticket domain types
- queue insight seed
- dashboard mocks
- inbox mocks
- settings mocks
- rules mocks
- alerts and trends mocks
- Zustand stores for tickets, filters and realtime feed
- React Query hooks for tickets and ticket detail

## Infrastructure foundation
- Supabase schema
- env helper
- Supabase client
- n8n payload mapper
- ticket repository with mock fallback

## Closing-pass integration targets
- App router to final page compositions
- dashboard page to operational home shell
- inbox page to inbox composition
- rules page to rules composition
- settings page to settings composition
- ticket detail page to ticket detail composition
