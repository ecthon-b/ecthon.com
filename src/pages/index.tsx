import type { NextPage } from "next";
import { Container } from "@nextui-org/react";
import { Main } from "@components/Main";
import { url } from "inspector";

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
        height: "100vh",
      }}
    >
      <Main />
    </Container>
  );
};

export default Home;
