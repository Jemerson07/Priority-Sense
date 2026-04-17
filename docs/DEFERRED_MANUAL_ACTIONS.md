# Priority-Sense — Deferred manual actions

This register centralizes the manual actions intentionally postponed until the project closing pass.

## Repository and page wiring
- replace the temporary route pages with final compositions according to `PAGE_REPLACEMENT_MANIFEST.md`
- verify the final `App.tsx` and router path usage against the desired product entry flow

## Styling verification
- confirm all renamed stylesheet files are correctly imported
- confirm no component depends on an older stylesheet path that was replaced during workaround steps

## Local environment activation
- install missing local dependencies when needed
- configure `.env` from `.env.example`
- activate Supabase connection locally

## Data and infrastructure activation
- apply `supabase/schema.sql`
- validate `@supabase/supabase-js` setup
- connect real n8n webhook flows to the mapper path
- move from mocks to query/live sources in the desired pages

## Final QA and release checks
- run responsive validation
- validate loading, empty and fallback states
- verify desktop and mobile route transitions
- confirm visual consistency after final wiring

## Note
These actions were deferred on purpose to keep repository progress uninterrupted while the product shell was being built.
