# Hosting and deployment

The portfolio is published as a static export on GitHub Pages at
`https://norawomack.com/`. The repository's Pages configuration owns this
custom domain; the static site controls routes and files at that domain, not
other domains or redirects outside GitHub Pages.

## URL configuration

`src/lib/site.ts` is the shared source for the production origin and base path.
The production base path is empty because the site is hosted at the domain
root. `productionPageUrl("/about")` builds an absolute production page URL
with the configured path prefix and trailing slash. `assetPath()` applies the
build-time `PAGES_BASE_PATH` to image paths. Next.js applies its configured
base path automatically to `Link` destinations.

The GitHub Pages workflow gets the origin and base path from
`actions/configure-pages`, verifies that Pages is configured for the production
origin and root path, then builds and deploys the static export. It is the
single workflow responsible for deploying this site. If the domain or hosting
path changes, update the shared URL configuration and workflow guard together.

## Hosting boundaries

With the custom domain configured as a root-hosted Pages site, this repository
can publish origin-root files such as `/robots.txt`. A project hosted at
`kristenwomack.github.io/nora-website/` only controls that project path; it
cannot publish or change `kristenwomack.github.io/robots.txt`.

GitHub Pages handles the configured `www`-to-apex and HTTP-to-HTTPS redirects.
The old project URL may redirect to the custom domain without preserving its
path. Verify provider-managed redirects after a deployment instead of relying
on this repository to configure them.

## Domain setup and verification

The custom domain is configured in repository **Settings → Pages**. DNS is
managed through the domain's authoritative DNS provider. Preserve unrelated
records when changing DNS. After a deployment, verify the home, about, and
gallery routes, representative images, trailing-slash behavior, and the live
HTTP/HTTPS, `www`, and previous project URL redirects.
