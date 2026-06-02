<script>
  import {
    BoxHeadingMain,
    Link,
    Section,
    Text,
  } from "@computational-biology-aachen/design";
  import SectionMain from "@computational-biology-aachen/design/SectionMain.svelte";
  import { faGithub } from "@fortawesome/free-brands-svg-icons";
  import Fa from "svelte-fa";
</script>

<SectionMain>
  <Text>Fill me out</Text>
</SectionMain>

<Section
  variant="dark"
  width="full"
>
  <BoxHeadingMain
    n="08"
    title="imprint"
    color="light"
  ></BoxHeadingMain>
  <Text color="light">
    Anbieter i.S.d. TDG/MDStV: Prof. Dr. Anna B. Matuszyńska <br />
    Worringerweg 1 52074 Aachen <br />
    Sammelbau Biologie, Bauteil 42 C, Erdgeschoss, Raum 041 <br />
    Work Phone: +49 241 80 25817 <br />

    Verantwortlich i.S.d. § 6 Abs. 2 MDStV: <br />
    Prof. Dr. Anna B. Matuszyńska <br />
    Design und Umsetzung Dr. Marvin van Aalst <Link
      color="light"
      href="https://github.com/Computational-Biology-Aachen/2023-hackathon-embu"
      ><Fa icon={faGithub} /></Link
    ><br />
    (c) 2022 Prof. Dr. Anna B. Matuszyńska, Alle Rechte vorbehalten.
  </Text>
</Section>
