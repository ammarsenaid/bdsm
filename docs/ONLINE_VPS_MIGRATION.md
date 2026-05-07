# Online VPS Migration

1. Repeat local VPS prerequisites.
2. Configure DNS to the VPS IP.
3. Add reverse proxy (Nginx/Caddy) with HTTPS.
4. Copy validated `.env` values (never commit `.env`).
5. Run `docker compose up --build -d`.
6. Verify `/`, `/ar`, `/app`, `/admin`, `/api/health`.
