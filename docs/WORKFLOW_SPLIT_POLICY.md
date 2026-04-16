# Priority-Sense — workflow split policy

## Rule adopted for implementation
Whenever a repository operation starts to fail repeatedly, the current phase must be split into smaller deliverables and continued without blocking the project flow.

## How phases will be split
1. foundation/data layer
2. reusable visual components
3. page composition
4. live integration or final wiring

## Why this policy exists
- reduce connector friction
- keep progress visible in the repository
- avoid large fragile operations
- preserve architectural continuity even when some file paths become unstable

## Current application of the policy
This policy is now active for all remaining implementation steps in Priority-Sense.
