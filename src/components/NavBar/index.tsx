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
                    bg: "transparent",
                    ul: {
                        overflowY: "hidden"
                    }
                }}
            >
                {collapseItems.map((item, index) => (
                    <Navbar.CollapseItem
                        key={item}
                    >
                        <Link
                            css={{
                                color: "#2B2F35",
                                minWidth: "100%",
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
                        mr: "2rem"
                    }}><FaLinkedin size={18} color="#0D1117" /></Link>
                    <Link css={{
                        padding: "0.5rem",
                        borderRadius: "$rounded",
                        background: "#2B2F35",
                        mr: "2rem"
                    }}><FaGithub size={18} color="#0D1117" /></Link>
                    <Link css={{
                        padding: "0.5rem",
                        borderRadius: "$rounded",
                        background: "#2B2F35"
                    }}><BsInstagram size={18} color="#0D1117" /></Link>
                </Row>

            </Navbar.Collapse>


        </Navbar>
    )
}