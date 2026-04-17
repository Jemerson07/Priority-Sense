# Priority-Sense — Conversation control product flow

## Purpose
Define where the conversation control module fits inside the broader product flow.

## Product flow position
1. inbound message arrives from email or WhatsApp
2. n8n intake flow normalizes the payload
3. Priority-Sense creates or updates a control conversation item
4. priority and pending state become visible in dashboard and inbox contexts
5. suggested reply, approval and pending control are handled inside the conversation control module
6. final response and follow-up state are reflected back into the operational queue

## Repository integration assets already available
- `src/finalizers/conversationControlFinalizer.tsx`
- `src/finalizers/page-wrappers/ConversationControlPageWrapper.tsx`
- `src/finalizers/showcasePlusControlFinalizer.tsx`

## Suggested future route option
A dedicated route like `/control` or `/conversations` can be added during the closing pass if this module should become a first-class page in the product.

## Benefit
This keeps the module aligned with the rest of the system instead of treating it like an isolated experimental feature.
