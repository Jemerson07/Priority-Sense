# Priority-Sense — N8N control staged plan

## Goal
Strengthen Priority-Sense as an operational control center for email and WhatsApp intake, response assistance and pending management.

## Stage 1 — Repository additions that can be built now
- domain types for conversation control
- mock control data
- operational summary component for inbound/responded/pending counts
- base composition for the control page
- styling for the new control surface
- planning docs for final manual integration

## Stage 2 — Manual integration later
- connect email intake workflow from n8n
- connect WhatsApp intake workflow from n8n
- persist conversations and responses in Supabase
- map incoming webhook payloads to conversation control entities
- activate response suggestion approval flow

## Stage 3 — Final delivery
- replace temporary page with control composition
- connect live queries and fallback behavior
- run visual QA and responsive QA
- validate status transitions and pending states

## Recommended operational states
- New inbound
- Under triage
- Suggested reply
- Awaiting approval
- Replied
- Awaiting customer
- Internal pending
- Escalated
- Resolved
- Automation failed

## What should already be reflected in the product
- unified counters for inbound/responded/pending items
- visibility of assisted responses
- control over pending conversations and next actions
- operational clarity for email and WhatsApp channels
