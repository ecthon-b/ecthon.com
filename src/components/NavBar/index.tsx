import { Image, Link, Navbar } from "@nextui-org/react";
import NavbarBrand from "@nextui-org/react/types/navbar/navbar-brand";

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
                $$navbarTextColor: "white"
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
            <Navbar.Collapse>
                {collapseItems.map((item, index) => (
                    <Navbar.CollapseItem key={item}>
                        <Link
                            color="inherit"
                            css={{
                                minWidth: "100%"
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