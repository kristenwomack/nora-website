# Nora's portfolio

A small portfolio site for Nora's modeling work, built with Next.js, TypeScript,
and Tailwind CSS. It builds as a static site and deploys to GitHub Pages.

## Run it locally

Use Node.js 22, then install the dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Image permissions

Images in this repository may not be used, copied, modified, or redistributed
without prior express permission from their rights holders.

## Contribute

Contributions are welcome. To propose a change:

1. Fork the repository and create a branch for your change.
2. Make your edits. Project details and gallery entries are in
   `src/data/projects.ts`; page content and layout are in `src/app/`.
3. Before adding, replacing, or modifying images, get express permission from
   the rights holders. Add approved gallery images under `public/images/nora/`
   and include descriptive alt text in `src/data/projects.ts`.
4. Run the checks:

   ```bash
   npm install
   npm run lint
   npm test
   ```

5. Open a pull request describing what you changed and how you verified it.
