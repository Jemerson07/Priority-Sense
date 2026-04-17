# Priority-Sense — N8N control deferred actions

## What is already added to the repository now
- staged plan for the n8n control reinforcement
- conversation control domain types
- mock operational control data
- conversation control summary component
- conversation control page composition
- shared stylesheet for this module

## What should remain for the manual closing pass
- create a dedicated page or route for the control module if desired
- connect n8n email intake to conversation control items
- connect n8n WhatsApp intake to conversation control items
- persist suggested replies, sent replies and pending states in Supabase
- add approval actions and status transitions in the live UI
- connect this module to real query-driven data instead of mocks

## Final practical benefit
When the closing pass starts, this module will already have a visual shell and a domain model. The remaining work should focus on live wiring and operational actions rather than structure creation.
