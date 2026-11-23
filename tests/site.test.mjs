import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";
import { productionOrigin, productionPageUrl } from "../src/lib/site.ts";

test("production page URLs use the canonical origin and trailing slashes", () => {
  assert.equal(productionPageUrl("/"), "https://norawomack.com/");
  assert.equal(productionPageUrl("/about"), "https://norawomack.com/about/");
  assert.equal(
    productionPageUrl("/work/notes-from-the-coast/"),
    `${productionOrigin}/work/notes-from-the-coast/`,
  );
});

test("project base paths are applied once to site-relative pages", () => {
  assert.equal(productionPageUrl("/", "/portfolio"), `${productionOrigin}/portfolio/`);
  assert.equal(
    productionPageUrl("/work/notes-from-the-coast", "/portfolio"),
    `${productionOrigin}/portfolio/work/notes-from-the-coast/`,
  );
});

test("invalid paths and base paths are rejected", () => {
  for (const path of ["https://example.com", "//example.com", "/../about", "/about?x=1"]) {
    assert.throws(() => productionPageUrl(path));
  }
  for (const basePath of ["portfolio", "/portfolio/", "//portfolio", "/.."]) {
    assert.throws(() => productionPageUrl("/about", basePath));
  }
});

test("asset paths use the build base path without a trailing slash", () => {
  for (const basePath of ["", "/portfolio"]) {
    const result = spawnSync(
      process.execPath,
      [
        "--experimental-strip-types",
        "--input-type=module",
        "-e",
        'import { assetPath } from "./src/lib/site.ts"; console.log(assetPath("/images/nora/red-cover.webp"));',
      ],
      { encoding: "utf8", env: { ...process.env, PAGES_BASE_PATH: basePath } },
    );
    assert.equal(result.status, 0, result.stderr);
    assert.equal(result.stdout.trim(), `${basePath}/images/nora/red-cover.webp`);
  }
});

test("deployment rejects Pages settings that differ from production", () => {
  for (const [origin, basePath, expectedStatus] of [
    [productionOrigin, "", 0],
    [productionOrigin, "/portfolio", 1],
    ["https://kristenwomack.github.io", "", 1],
  ]) {
    const result = spawnSync(
      process.execPath,
      ["--experimental-strip-types", "scripts/check-pages-config.mjs"],
      {
        encoding: "utf8",
        env: { ...process.env, PAGES_ORIGIN: origin, PAGES_BASE_PATH: basePath },
      },
    );
    assert.equal(result.status, expectedStatus, result.stderr);
  }
});
