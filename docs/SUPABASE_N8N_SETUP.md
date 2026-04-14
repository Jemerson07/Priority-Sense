# Priority-Sense — Supabase and n8n setup

This phase adds the first real integration foundation for the app.

## Files added
- `supabase/schema.sql`
- `.env.example`
- `src/lib/env.ts`
- `src/lib/supabase.ts`
- `src/services/mappers/n8nTicketMapper.ts`
- `src/services/tickets/ticketService.ts`

## What this phase solves
- Database schema for tickets, interactions and priority rules
- Environment variables for Supabase and n8n
- Shared Supabase client
- Initial payload mapper for inbound n8n workflows
- Service function to read tickets from Supabase

## Manual step 1 — install Supabase SDK
Run this in the project:

```bash
npm install @supabase/supabase-js
```

## Manual step 2 — create your Supabase project
1. Open Supabase
2. Create a new project
3. Open the SQL editor
4. Paste `supabase/schema.sql`
5. Run the script

## Manual step 3 — create your local env file
Create a `.env` file based on `.env.example`:

```env
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_N8N_WEBHOOK_BASE_URL=https://your-n8n-instance.example.com/webhook
```

## Manual step 4 — wire the inbox to Supabase later
When you are ready to replace mock data, the next migration will be:
- keep `zustand` for selected ticket and local filters
- use `ticketService.ts` with React Query for remote reads
- keep `n8nTicketMapper.ts` for incoming webhook normalization

## Suggested n8n payload shape
Send payloads like this to Priority-Sense:

```json
{
  "id": "EXT-2026-001",
  "customer": "LM Mobilidade",
  "channel": "whatsapp",
  "subject": "Vehicle blocked before route departure",
  "message": "The vehicle cannot start the route because the blocking system is active.",
  "score": 96,
  "status": "In Progress",
  "slaMinutes": 15,
  "tags": ["blocked", "route", "fleet"],
  "assignedTo": "Operations Squad"
}
```

## Next recommended phase
- Add React Query hooks for ticket listing and ticket detail
- Persist interactions in Supabase
- Create an API/webhook endpoint to receive n8n events
- Add filters by channel, priority and status
