import {
  Col,
  Row,
  Text,
  Image,
  Container,
  keyframes,
  Button,
  Spacer,
} from "@nextui-org/react";
import { useDinoPhrases } from "@hooks/useDinoPhrases";
import { useCounter } from "@context/CounterProvider";

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

export default function Hero() {
  const { getCurrentPhrase } = useDinoPhrases();
  const { count, incrementCounter, decrementCounter } = useCounter();

  return (
    <Container fluid>
      <Row align={"center"} justify={"center"} wrap={"wrap"}>
        <Image
          alt={"DinoCode Logo"}
          src={"/images/dinocode-logo.svg"}
          width={"216px"}
          height={"216px"}
          containerCss={{
            margin: "0px 32px",
            animation: `${fadeIn} 1000ms ease-out`,
          }}
        />
        <Image
          alt={"NextUI Isotipo Logo"}
          src={
            "https://raw.githubusercontent.com/nextui-org/nextui/main/apps/docs/public/isotipo.png"
          }
          containerCss={{
            margin: "0px 32px",
            animation: `${fadeIn} 1000ms ease-out`,
          }}
        />
      </Row>
      <Row align={"center"} justify={"center"} wrap={"wrap"}>
        <Text
          size={64}
          css={{
            textGradient: "45deg, $yellow600 -20%, $red600 100%",
            animation: `${fadeIn} 1000ms ease-out`,
          }}
        >
          DinoCode
        </Text>
        <Text
          size={64}
          margin={"16px"}
          css={{
            animation: `${fadeIn} 1000ms ease-out`,
          }}
        >
          NextUI
        </Text>
        <Text
          size={64}
          css={{
            textGradient: "45deg, $yellow600 -20%, $red600 100%",
            animation: `${fadeIn} 1000ms ease-out`,
          }}
        >
          Boilerplate
        </Text>
      </Row>
      <Row align={"center"} justify={"center"} wrap={"wrap"}>
        <Text
          size={18}
          css={{
            animation: `${fadeIn} 1000ms ease-out`,
            fontStyle: "italic",
          }}
          blockquote
        >
          {getCurrentPhrase().phrase} - {getCurrentPhrase().author}
        </Text>
      </Row>
      <Spacer />
      <Col>
        <Row align={"center"} justify={"center"} wrap={"wrap"}>
          <Text size={32}>Contador Context</Text>
        </Row>
        <Spacer />
        <Row align={"center"} justify={"center"} wrap={"wrap"}>
          <Button
            auto
            css={{ padding: "0", width: "30px", height: "30px" }}
            onClick={decrementCounter}
          >
            -
          </Button>
          <Spacer />
          <Text>{count}</Text>
          <Spacer />
          <Button
            auto
            css={{ padding: "0", width: "30px", height: "30px" }}
            onClick={incrementCounter}
          >
            +
          </Button>
        </Row>
      </Col>
    </Container>
  );
}
