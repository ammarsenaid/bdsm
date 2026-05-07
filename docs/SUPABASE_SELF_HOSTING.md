# Supabase Self-hosting Preparation

Current project keeps Supabase integration mocked via env placeholders.

## Planned env keys
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

## Next steps
1. Deploy self-hosted Supabase stack.
2. Restrict network/security groups to app + admin operators.
3. Add server-only Supabase client helper under `lib/`.
4. Add migrations and RLS policies before exposing user data.
