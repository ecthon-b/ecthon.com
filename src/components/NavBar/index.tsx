import { Col, Image, Link, Navbar } from "@nextui-org/react";
import NavbarBrand from "@nextui-org/react/types/navbar/navbar-brand";
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
                background: "transparent"
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
                }}
            >
                {collapseItems.map((item, index) => (
                    <Navbar.CollapseItem key={item}>
                        <Link
                            css={{
                                color: "white",
                                minWidth: "100%",
                                fontSize: "2rem",
                                fontWeight: "$semibold",
                            }}
                            href="#"
                        >
                            {item}
                        </Link>
                    </Navbar.CollapseItem>
                ))}
            </Navbar.Collapse>


        </Navbar>
    )
}