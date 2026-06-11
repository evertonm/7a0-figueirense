# Figueira XI

Jogo inspirado no formato do 7 a 0, usando jogadores que passaram pelo
Figueirense entre 1970 e 2026.

## Executar localmente

O projeto e totalmente estatico. Sirva a raiz com qualquer servidor HTTP:

```powershell
python -m http.server 4173
```

Depois acesse `http://127.0.0.1:4173`.

## Publicacao

No fluxo atual de Workers Builds da Cloudflare, use:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Root directory: vazio
