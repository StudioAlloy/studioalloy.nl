# 2025 static archive deployment

## Build

Use Node.js 14.18.0 (the version in `.nvmrc`) and Yarn Classic. From the repository root:

```sh
yarn install --frozen-lockfile
yarn generate:archive
```

The repository uses the private GSAP registry configured in `.npmrc`. On a clean machine, provide a valid `PRIVJS_TOKEN` environment variable for the install command; no registry credential is needed by the deployed static files.

The generated output directory is `dist/`. Upload the **contents** of `dist/`, including the hidden `.htaccess` file, into `public_html/2025/`. Do not upload `dist/` itself as an extra directory.

Expected server structure:

```text
public_html/
├── index.php                 # or the new website files
├── robots.txt                # merge in the /2025/ disallow rule
└── 2025/
    ├── .htaccess
    ├── index.html
    ├── _nuxt/
    └── all other files copied from dist/
```

The archive build does not create a sitemap. Do not add `https://at-alloy.nl/2025/` or any archive route to the live website's sitemap.

The build snapshots the current GraphQL content and downloads its CMS-hosted images into `dist/media/`. Existing external hyperlinks (including the PDF terms and conditions link) remain external.

## Robots protection

Merge this entry into the domain-root `public_html/robots.txt` (a file at `/2025/robots.txt` alone is not a domain robots policy):

```text
User-agent: *
Disallow: /2025/
```

`archive-config/robots.txt` contains the same entry. The generated archive also contains a copy for completeness.

## Apache

The generated `.htaccess` and `archive-config/apache-2025.htaccess` contain the same rules:

```apache
<IfModule mod_headers.c>
  Header always set X-Robots-Tag "noindex, nofollow"
</IfModule>

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /2025/

  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]

  RewriteRule ^ index.html [L]
</IfModule>
```

This requires Apache `mod_headers` for the indexing header and `mod_rewrite` for history-mode fallback routing.

## Nginx

Add the following inside the appropriate `server` block, then validate and reload Nginx. The same snippet is in `archive-config/nginx-2025.conf`.

```nginx
location = /2025 {
    return 301 /2025/;
}

location ^~ /2025/ {
    add_header X-Robots-Tag "noindex, nofollow" always;
    try_files $uri $uri/ /2025/index.html;
}
```

## Deployable ZIP

Create a ZIP whose files expand directly into the server's `2025/` directory:

```sh
(cd dist && zip -r ../studioalloy-2025-static.zip .)
```

Verify that the ZIP includes `.htaccess` before uploading:

```sh
unzip -l studioalloy-2025-static.zip | grep .htaccess
```

## Static archive limitations

- There are no repository-owned forms, authentication flows, server API routes, or Nuxt server middleware to replace.
- The public WordPress GraphQL endpoint is required while building because it supplies the page snapshot. Generated HTML and 136 CMS images are included in `dist/`, so direct page loads do not need Node.js.
- The hydrated Nuxt/Apollo client can still contact `https://api.studioalloy.nl/graphql` during client-side route changes. Keep that read-only endpoint available if the original SPA-style navigation behavior must remain fully functional; direct requests to every generated archive page remain static.
- `/hangout/` and `/hangout2/` are JavaScript-driven redirects to external Google Meet URLs. They remain external and require client-side JavaScript.
- Email, telephone, social-sharing, and the external terms-and-conditions PDF links remain external by design.

## Rollback

Before deployment, rename the current server directory to a timestamped backup, for example `public_html/2025-backup-YYYYMMDD-HHMM`. Upload the new archive as a fresh `public_html/2025/` directory. To roll back, rename the failed `2025/` directory out of the way and rename the backup directory back to `2025/`. Restore the previous domain-root `robots.txt` only if its `/2025/` rule was not present before; retaining that disallow rule is safer while an archive exists. No old-domain redirect is part of this archive preparation.
