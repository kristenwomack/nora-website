import { productionBasePath, productionOrigin } from "../src/lib/site.ts";

if (
  process.env.PAGES_ORIGIN !== productionOrigin ||
  process.env.PAGES_BASE_PATH !== productionBasePath
) {
  console.error(
    `GitHub Pages must be configured for ${productionOrigin}${productionBasePath}/ before deployment. ` +
      `Received origin ${JSON.stringify(process.env.PAGES_ORIGIN)} and base path ${JSON.stringify(process.env.PAGES_BASE_PATH)}.`,
  );
  process.exitCode = 1;
}
