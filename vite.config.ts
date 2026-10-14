import adapter from "@sveltejs/adapter-static";
import { mdsvex } from "mdsvex";
import { existsSync } from "fs";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

const designSrc = new URL("../../pkg-js/design/src/lib", import.meta.url)
  .pathname;

const workspaceAlias: Record<string, string> = existsSync(designSrc)
  ? { "@computational-biology-aachen/design": designSrc }
  : {};

export default defineConfig({
  resolve: { alias: workspaceAlias },
  plugins: [
    sveltekit({
      compilerOptions: {
        // Force runes mode for the project, except for libraries. Can be removed in svelte 6.
        runes: ({ filename }) =>
          filename.split(/[/\\]/).includes("node_modules") ? undefined : true,
      },
      preprocess: [mdsvex({ extensions: [".svx", ".md"] })],
      extensions: [".svelte", ".svx", ".md"],
      adapter: adapter(),
      prerender: {
        handleHttpError: ({ path, message }) => {
          // Paraglide locale-prefixed URLs are handled client-side via reroute;
          // suppress 404s for these paths in the static build.
          if (/\/(en|de|fr|es|pl)(\/|$)/.test(path)) {
            return;
          }

          throw new Error(message);
        },
      },
      paths: {
        base: process.argv.includes("dev") ? "" : "/2023-hackathon-embu",
      },
      version: {
        // Poll for new deploys so long-lived tabs upgrade proactively instead of
        // only recovering reactively after a failed navigation.
        pollInterval: 300_000,
      },
    }),
  ],
  server: { port: 5179, strictPort: true },
});
