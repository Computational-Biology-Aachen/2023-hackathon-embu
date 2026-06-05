<script>
  import {
    Bold,
    Button,
    H2,
    Hero,
    Italic,
    Li,
    Link,
    Section,
    Text,
    Ul,
  } from "@computational-biology-aachen/design";

  import group from "$lib/assets/group.jpg";
</script>

<svelte:head>
  <title>2023 Embu Hackathon</title>
</svelte:head>

<Hero src={group}>
  <h1 class="hero-title">2023 Hackathon EMBU</h1>
  <div class="hero-highlight">
    <p>21<sup>st</sup> – 25<sup>th</sup> August 2023</p>
    <p>Guest House Boardroom, University of Embu, Kenya</p>
  </div>
</Hero>

<Section
  variant="light"
  width="narrow"
>
  <H2
    >Computational Modeling to Unleash the Power of Young African Researchers</H2
  >
  <Text>
    The <Bold>InnovativeAIHealthLab</Bold> hosted the
    <Italic
      >2023 Hackathon Workshop on Computational Modeling to Unleash the
      Computational Power of Young African Researchers</Italic
    >
    at the University of Embu from <Bold
      >21<sup>st</sup>–25<sup>th</sup> August 2023</Bold
    >. The workshop falls under the research project <Italic
      >“Using computational modelling and artificial intelligence to enhance HIV
      testing, status awareness, and status disclosure among adolescent boys and
      girls and young men and women in Kenya”</Italic
    > and is generously funded by UNESCO-OWSD funding for Early Career Fellowship.
  </Text>
  <Text>
    The purpose of this workshop is to provide training for a group of
    <Bold>30 researchers</Bold>, chosen through a competitive selection process
    based on the quality and merits of their applications. A multidisciplinary
    team from various parts of the world introduces participants to the current
    state-of-the-art approaches to computational modelling — a highly
    transferable skill that empowers participants to be problem solvers in a
    vast variety of fields.
  </Text>
  <Text>
    Computational modeling is often overlooked or not adequately emphasized in
    the mathematics and biology curricula of numerous universities worldwide.
    Consequently, a significant number of graduates today possess limited or no
    understanding of modeling principles, programming, and computational
    analysis. Our aim is for participants to grasp the significance of modeling
    and the fundamental principles underlying mathematical modeling.
  </Text>
  <Text>
    Additionally, we hope to cultivate an appreciation for the transformative
    potential of computational work in dealing with intricate multivariable
    systems and effectively managing vast amounts of data. By doing so,
    participants acquire valuable problem-solving skills and knowledge essential
    for addressing contemporary and future challenges.
  </Text>
</Section>

<Section
  variant="surface"
  width="narrow"
>
  <H2 color="primary">Who should apply</H2>
  <Text>
    We seek applications from young researchers (<Bold>postgraduate level</Bold
    >) interested in using computational modelling skills in their research.
  </Text>
  <Ul>
    <Li
      >We prefer researchers with little computational skills and little
      programming skills in Python.</Li
    >
    <Li
      >Researchers in mathematics, statistics, computing, biology and
      agriculture are most welcome to apply.</Li
    >
    <Li>Incomplete submissions are automatically disqualified.</Li>
  </Ul>
  <Text>
    <Bold>Application deadline:</Bold> Friday, 28<sup>th</sup> July 2023, 2300 Hrs,
    EAT.
  </Text>
  <Button disabled>Application closed</Button>
</Section>

<Section
  variant="dark"
  width="narrow"
>
  <H2 color="light">Teachers</H2>
  <Ul color="light">
    <Li color="light"
      ><Link
        color="light"
        href="https://computational-biology-aachen.github.io/team/anna-matuszy%C5%84ska"
        >Prof. Dr. Anna Matuszyńska</Link
      >, RWTH Aachen</Li
    >
    <Li color="light">Prof. Faraimunashe Chirove, University of Johannesburg</Li
    >
    <Li color="light"
      ><Link
        color="light"
        href="https://computational-biology-aachen.github.io/team/marvin-van-aalst"
        >Mr. Marvin van Aalst</Link
      >, Heinrich Heine University, Düsseldorf</Li
    >
    <Li color="light">Dr. Otho Mantegazza, Data Scientist at Accurat, Milan</Li>
    <Li color="light">Mr. Tobias Pfennig, RWTH Aachen, Germany</Li>
    <Li color="light">Dr. Marilyn Ronoh, University of Embu</Li>
  </Ul>
</Section>

<Section width="narrow">
  <H2>Organizing Committee</H2>
  <Text>On behalf of the Local Organizing Committee,</Text>
  <Text>
    <Bold>Dr. Marilyn C. Ronoh</Bold> — Principal Investigator, 2022 OWSD Early Career
    Fellow.<br />
    <Link href="mailto:ronoh.marilyn@embuni.ac.ke"
      >ronoh.marilyn@embuni.ac.ke</Link
    >
  </Text>
  <Text>We wish you all the best in your application.</Text>
</Section>

<style>
  .hero-title {
    margin: 0 0 0.5rem 0;
    padding: 0;
    max-width: 30rem;
    color: var(--color-bg);
    font-weight: 700;
    font-size: 3rem;
    font-family: var(--font-sans);
  }

  .hero-highlight {
    border-radius: 1rem;
    background-color: var(--color-primary);
    padding: 1.5rem;
    width: fit-content;
  }

  .hero-highlight p {
    margin: 0;
    color: var(--color-bg);
    font-weight: 500;
    font-size: 1rem;
  }

  @media (min-width: 64rem) {
    .hero-title {
      font-size: 5rem;
    }
  }
</style>
