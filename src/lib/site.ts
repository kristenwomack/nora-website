export const productionOrigin = "https://norawomack.com";
export const productionBasePath = "";

function validateBasePath(basePath: string): void {
  if (basePath === "") return;
  validateSitePath(basePath);
  if (basePath.endsWith("/")) {
    throw new Error(`Invalid base path: ${basePath}`);
  }
}

function validateSitePath(path: string): void {
  if (
    !path.startsWith("/") ||
    path.includes("//") ||
    /[\\?#]/.test(path) ||
    path.split("/").some((segment) => segment === "." || segment === "..")
  ) {
    throw new Error(`Expected a site-relative path: ${path}`);
  }
}

export const basePath = process.env.PAGES_BASE_PATH ?? "";
validateBasePath(basePath);

export function assetPath(path: string): string {
  validateSitePath(path);
  return `${basePath}${path}`;
}

export function productionPageUrl(
  path: string,
  pathPrefix = productionBasePath,
): string {
  validateSitePath(path);
  validateBasePath(pathPrefix);
  const pagePath = path.endsWith("/") ? path : `${path}/`;
  return `${productionOrigin}${pathPrefix}${pagePath}`;
}
