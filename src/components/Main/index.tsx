import { NavBar } from "@components/NavBar";
import { Col, Link, Navbar, Row, Text } from "@nextui-org/react";
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { BsInstagram } from "react-icons/bs"

export function Main() {
    return (
        <Col
            css={{
                width: "100%",
                height: "100vh",
                alignItems: "center",
                justifyContent: "center",
                backgroundImage: "url(background-main.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                "@smMax": {
                    width: "100%",
                    padding: "0 1rem",

                }
            }}
        >
            <Row
                css={{
                    width: "592px",
                    height: "8px",
                    backgroundColor: "#ff008e",
                    backgroundImage: "linear-gradient(257deg, #ff008e 0%, #ffcd1e 100%)",

                    margin: "0 auto",
                    clipPath: "polygon(0 0, 100% 0%, 99% 100%, 1% 100%)",

                    "@smMax": {
                        width: "100%",
                        padding: "0 1rem",

                    }
                }}
            >
            </Row>

            <NavBar />

            <Col
                css={{
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Text
                    css={{
                        textAlign: "center",
                        color: "#606162",
                        mt: "140px"
                    }}
                >
                    OLÁ, EU SOU 🖐️
                </Text>
                <Text
                    as="h1"
                    css={{
                        textAlign: "center",
                        color: "#D9D9D9",
                        mt: "2rem"
                    }}
                >
                    ECTHON <Text as="span" css={{ color: "#606162" }}>ALMEIDA</Text>
                </Text>
                <Text
                    css={{
                        textAlign: "center",
                        color: "#606162",
                        mb: "4rem"
                    }}
                >
                    Desenvolvedor Front-End & UI Designer Freelance
                </Text>
            </Col>

            <Row
                css={{
                    width: "208px",
                    justifyContent: "space-between",
                    alignItem: "center",
                    margin: "0 auto"
                }}
            >
                <Link css={{
                    padding: "0.5rem",
                    borderRadius: "$rounded",
                    background: "#2B2F35"
                }}><FaLinkedin size={24} color="#0D1117" /></Link>
                <Link css={{
                    padding: "0.5rem",
                    borderRadius: "$rounded",
                    background: "#2B2F35"
                }}><FaGithub size={24} color="#0D1117" /></Link>
                <Link css={{
                    padding: "0.5rem",
                    borderRadius: "$rounded",
                    background: "#2B2F35"
                }}><BsInstagram size={24} color="#0D1117" /></Link>
            </Row>

            <Row
                css={{
                    margin: "100px auto 0 auto",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Text
                    css={{
                        textAlign: "center",
                        color: "#2B2F35"
                    }}
                >
                    Precisando de ajuda com algum projeto? <Text as="span" css={{ color: "#514EFF" }}>Enviar mensagem.</Text>
                </Text>
            </Row>
        </Col>
    )
}