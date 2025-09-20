## Desenvolvimento

Este projeto é um site Next.js (App Router) com export estático (`output: "export"`).

- Requisitos: Node.js 18+ (recomendado 20), npm
- Rodar local: `npm install` e depois `npm run dev` → http://localhost:3000
- Build local (estático): `npm run build && npm run export -- -o dist`

## Deploy (CI/CD – Hostinger)

Um workflow do GitHub Actions publica automaticamente a cada push na `main`.

- Arquivo: `.github/workflows/deploy.yml`
- Gatilho: push em `main`
- Node: `${{ secrets.NODE_VERSION }}` (recomendado 20)
- Build: `npm ci && npm run build && npm run export -- -o dist`
- Apenas `dist/` é enviado para o servidor
- Deploy incremental pelo action de FTP (sem limpar tudo)
- SPA fallback: copia `dist/index.html` para `dist/404.html`

### Segredos necessários (GitHub → Repo → Settings → Secrets and variables → Actions)

- `HOSTINGER_HOST` → host FTP/SFTP (ex.: `ftp.iaradregerarte.com`)
- `HOSTINGER_USER` → usuário FTP/SFTP
- `HOSTINGER_PASS` → senha do usuário FTP (se usar FTP)
- `HOSTINGER_REMOTE_DIR` → pasta remota (ex.: `public_html/`)
- `NODE_VERSION` → versão do Node para build (ex.: `20`)

Opção SFTP (mais seguro):

- `HOSTINGER_SSH_KEY` → chave privada (se usar SFTP/SSH, em vez de `HOSTINGER_PASS`)

O workflow já inclui os dois blocos de deploy (FTP por padrão, SFTP comentado). Escolha e mantenha apenas um ativo conforme o protocolo.

### Passos do pipeline

1. Checkout do repositório
2. Setup Node `NODE_VERSION`
3. `npm ci`
4. `npm run build`
5. `npm run export -- -o dist`
6. Cria `dist/404.html` (SPA fallback)
7. Envia `dist/` para `${HOSTINGER_REMOTE_DIR}` via FTP (ou SFTP, se habilitado)

### Verificações

- A ação “Build & Deploy to Hostinger” deve ficar verde após o push
- Arquivos aparecem em `${HOSTINGER_REMOTE_DIR}` (ex.: `public_html/`)
- Acesse `https://iaradregerarte.com/` e valide navegação/rotas e assets

### Rollback

- Reverter commit e dar push na `main` → republica a versão anterior
- Opcional: usar tags (releases) para versões estáveis

### Notas

- Se publicar em subpasta/subdomínio, ajuste `HOSTINGER_REMOTE_DIR` (ex.: `public_html/site/`)
- Se preferir, você pode habilitar um `.htaccess` de SPA (rewrite para `/index.html`) — há um passo comentado no workflow como alternativa ao `404.html`
