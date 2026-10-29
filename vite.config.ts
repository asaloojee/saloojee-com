import { defineConfig } from "vite-plus";

export default defineConfig({
  fmt: {
    // Astro files are handled by the Astro language server, not Oxfmt.
    ignorePatterns: ["**/*.astro"],
  },
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: { "vite-plus/prefer-vite-plus-imports": "error" },
    options: { typeAware: true, typeCheck: true },
  },
});
