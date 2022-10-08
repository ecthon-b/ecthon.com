import type { NextPage } from "next";
import { Container } from "@nextui-org/react";
import Hero from "@components/hero";

const Home: NextPage = () => {
  return (
    <Container
      fluid
      responsive={false}
      display={"flex"}
      gap={0}
      alignItems={"center"}
      justify={"center"}
      direction={"row"}
      css={{
        linearGradient: "45deg, $dinoCodePink -90%, $dinoCodePurple 100%",
        height: "100vh",
      }}
    >
      <Hero />
    </Container>
  );
};

export default Home;
