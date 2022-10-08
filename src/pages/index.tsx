import type { NextPage } from "next";
import { Container } from "@nextui-org/react";

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
      <h1>Hello, Ecthon</h1>
    </Container>
  );
};

export default Home;
