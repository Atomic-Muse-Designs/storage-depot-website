# Storage Depot: GitHub source export

This archive contains the current website source, photos, fonts, lockfile, and web/mobile/desktop workspace. The orange-door corridor remains the homepage hero. Updated facility photos and revised punctuation are included.

## Upload to GitHub

Extract the ZIP, create an empty GitHub repository, and open a terminal inside the extracted `storage-depot` folder:

```sh
git init
git add .
git commit -m "Add Storage Depot website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the remote URL with your repository URL. Alternatively, use GitHub Desktop to add this folder as a local repository and publish it.

## Run locally

Install Bun and run from the project root:

```sh
bun install
cp .env.template .env
```

Set `DATABASE_URL` in the root `.env`. Use your own Turso URL and `DATABASE_AUTH_TOKEN`, or use `DATABASE_URL=file:../../storage-depot.db` for a local SQLite database when running the web dev server from the workspace. Set `WEBSITE_URL=http://localhost:4200`. Do not commit credentials.

```sh
bun run db:push
bun run dev
```

The web dev server uses port 4200, specified by `.runable/ports.json`. Apply the database schema for the contact form to store inquiries.

## Production

```sh
bun run build:web
bun run start
```

Configure your hosting environment and database connection. Use a persistent database such as your own Turso instance for production. The full `bun run build` passed at export time.

GitHub stores source code; uploading the repository does not automatically publish the website. The complete app includes a Hono backend and contact-form database, so GitHub Pages alone cannot run it.

## Exclusions and remaining setup

- Actual `.env` files and credentials are excluded. Blank `.env.template` files are retained.
- Dependencies, build output, caches, Git history, logs, and database contents are excluded.
- `.runable` metadata is retained because the project uses it for fixed ports and template validation.
- Contact-form submissions save to the configured database; email forwarding is not yet configured.
- Mobile and desktop template packages are included; the completed design is the web app.
- The live Runable publication is separate from this GitHub export.