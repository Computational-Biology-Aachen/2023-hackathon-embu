<script lang="ts">
  import favicon from "$lib/assets/logos/cpbl-favicon.svg";
  import * as config from "$lib/config";
  import { Navbar, NavGH } from "@computational-biology-aachen/design";
  import "../app.css";

  let { children } = $props();
</script>

<!-- SEO -->
<svelte:head>
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
  <title>2023 Embu Hackathon</title>
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

<style>
  .brand {
    color: var(--color-primary);
    font-weight: 600;
    font-size: 1rem;
  }
</style>
