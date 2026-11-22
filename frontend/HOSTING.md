# Hosting Indalium

## Domains

Configure both hostnames in the hosting provider:

- `www.indalium.carvingsoft.com` (preferred canonical hostname)
- `indalium.carvingsoft.com` (apex alias)

Enable HTTPS certificates for both hostnames. Set the provider to redirect `https://indalium.carvingsoft.com/*` to the matching `https://www.indalium.carvingsoft.com/*` URL with a permanent redirect. The application emits canonical and Open Graph URLs on the `www` hostname.

## Angular deployment

Build the production site with:

```sh
npm run build
```

Deploy the contents of `dist/frontend/browser`. Configure the static host to serve `index.html` as the fallback for application routes such as `/products` and `/contact`.

The production hostname configuration is in `src/environments/environment.ts`; local development uses `src/environments/environment.development.ts`. Update `public/robots.txt` and `public/sitemap.xml` if the canonical hostname changes.

## DNS

Add the DNS records required by the hosting provider for both hostnames. Apex records cannot be prescribed here because the target provider and its required A/ALIAS/flattened-CNAME values are not specified.
