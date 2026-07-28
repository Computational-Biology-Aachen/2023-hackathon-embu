<script lang="ts">
  import { beforeNavigate } from "$app/navigation";
  import { updated } from "$app/state";
  import favicon from "$lib/assets/logos/cpbl-favicon.svg";
  import * as config from "$lib/config";
  import { Imprint, Navbar, NavGH } from "@computational-biology-aachen/design";
  import "../app.css";

  let { children } = $props();

  // A new deploy was detected while this tab was open: force a full reload on
  // the next navigation instead of client-side routing into a stale bundle.
  beforeNavigate(({ willUnload, to }) => {
    if (updated.current && !willUnload && to?.url) {
      location.href = to.url.href;
    }
  });
</script>

<!-- SEO -->
<svelte:head>
  <title>2023 Embu Hackathon</title>
  <meta
    name="description"
    content={config.description}
  />
  <meta
    property="og:title"
    content={config.title}
  />
  <meta
    property="og:description"
    content={config.description}
  />
  <meta
    property="og:url"
    content={config.url}
  />
  <meta
    property="og:type"
    content="website"
  />
  <meta
    name="twitter:card"
    content="summary"
  />
  <link
    rel="icon"
    href={favicon}
  />
</svelte:head>

<Navbar>
  {#snippet brand()}
    <span class="brand">Embu Hackathon</span>
  {/snippet}
  <NavGH
    href="https://github.com/Computational-Biology-Aachen/2023-hackathon-embu"
  />
</Navbar>

{@render children()}

<Imprint
  github="https://github.com/Computational-Biology-Aachen/2023-hackathon-embu"
/>

<style>
  .brand {
    color: var(--color-primary);
    font-weight: 600;
    font-size: 1rem;
  }
</style>
