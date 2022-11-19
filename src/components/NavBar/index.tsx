import { Col, Image, Link, Navbar, Row } from "@nextui-org/react";
import NavbarBrand from "@nextui-org/react/types/navbar/navbar-brand";
import { BsInstagram } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useHover } from "usehooks-ts";

export function NavBar() {
    const collapseItems = [
        "Home",
        "Portfolio",
        "Sobre",
        "Contato"
    ]
    return (
        <Navbar
            variant="floating"
            css={{
                $$navbarBlurBackgroundColor: "transparent",
                $$navbarBackgroundColor: "transparent",
                $$navbarShadow: "0",
                $$navbarBlur: "0%",
                $$navbarTextColor: "white",
                background: "transparent",
            }}
        >
            <Navbar.Brand>
                <Image
                    src="logo.svg"
                    alt="Logo Ecthon"

                    css={{
                        "@smMax": {
                            width: "50%",
                        }
                    }}
                />
            </Navbar.Brand>

            <Navbar.Content>
                <Navbar.Item>
                    <Navbar.Toggle color="primary" aria-label="toggle navigation" />
                </Navbar.Item>
            </Navbar.Content>
            <Navbar.Collapse
                css={{
                    margin: "0 auto",
                    bg: "transparent",
                }}
            >
                {collapseItems.map((item, index) => (
                    <Navbar.CollapseItem
                        key={item}
                        css={{
                            width: "1360px",
                            margin: "0 auto",
                            "@smMax": {
                                width: "100%",
                            }
                        }}
                    >

                        <Link
                            css={{
                                color: "#2B2F35",
                                fontSize: "2rem",
                                fontWeight: "$semibold",
                                transition: "color 0.2s",
                                '&:hover': {
                                    color: "#514EFF"
                                }
                            }}
                            href="#"
                        >
                            {item}
                        </Link>
                    </Navbar.CollapseItem>
                ))}
                <Row
                    css={{
                        width: "1360px",
                        margin: "0 auto",
                        "@smMax": {
                            width: "100%",
                        }
                    }}
                >
                    <Row
                        css={{
                            width: "208px",
                            // justifyContent: "space-between",
                            alignItem: "center",
                            mt: "2rem",
                            // margin: "0 auto"
                        }}
                    >
                        <Link css={{
                            padding: "0.5rem",
                            borderRadius: "$rounded",
                            background: "#2B2F35",
                            color: "#0D1117",
                            mr: "2rem",
                            transition: "0.3s",
                            '&:hover': {
                                color: "#fff",
                                background: "#514EFF"
                            },
                        }}><FaLinkedin size={18} /></Link>
                        <Link css={{
                            padding: "0.5rem",
                            borderRadius: "$rounded",
                            background: "#2B2F35",
                            mr: "2rem",
                            color: "#0D1117",
                            transition: "0.3s",
                            '&:hover': {
                                color: "#fff",
                                background: "#514EFF"
                            },
                        }}><FaGithub size={18} /></Link>
                        <Link css={{
                            padding: "0.5rem",
                            borderRadius: "$rounded",
                            background: "#2B2F35",
                            color: "#0D1117",
                            transition: "0.3s",
                            '&:hover': {
                                color: "#fff",
                                background: "#514EFF"
                            },
                        }}><BsInstagram size={18} /></Link>
                    </Row>
                </Row>

            </Navbar.Collapse>


        </Navbar>
    )
}