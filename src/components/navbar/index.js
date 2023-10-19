import React, { useState } from "react"

import {
    NavbarWrapper,
    AlertWrapper,
    NavWrapper,
    Emoji,
    LogoWrapper,
    Logo,
    Nav,
    NavButton,
    NavIcon,
    ThemeSwitcher,
} from "./index.style"

import aboutMeIcon from "../../utils/imgs/nav/about-me.png"
import myBlogIcon from "../../utils/imgs/nav/my-blog.png"
import ContactIcon from "../../utils/imgs/nav/contact.png"
import ThemeIcon from "../../utils/imgs/nav/theme.png"
import useThemeDetector from "../../styles/themeDetector"

const Navbar = () => {
    const isDarkTheme = useThemeDetector() ? "dark" : "light"
    const [ThemeState, setThemeState] = useState(isDarkTheme)
    const NavData = [
        {
            id: 1,
            icon: aboutMeIcon,
            name: "about me",
            link: "/about-me",
        },
        {
            id: 2,
            icon: myBlogIcon,
            name: "my blog",
            link: "/my-blog",
        },
        {
            id: 3,
            icon: ContactIcon,
            name: "contact",
            link: "/contact",
        },
        {
            id: 4,
            icon: ThemeIcon,
            name: ThemeState,
            isThemeSwitcher: true,
        },
    ]

    return (
        <NavbarWrapper>
            <AlertWrapper>
                <Emoji />
                <p>
                    Hey, if you want to receive the{" "}
                    <span
                        style={{
                            color: "#9680FF",
                            textDecoration: "underline",
                        }}
                    >
                        latest
                    </span>{" "}
                    news subscribe to my newsletter!
                </p>
            </AlertWrapper>
            <NavWrapper>
                <LogoWrapper>
                    <Logo />
                    <p>my hobby blog</p>
                </LogoWrapper>
                <Nav>
                    {NavData.map((item) => {
                        if (item.isThemeSwitcher !== true) {
                            return (
                                <NavButton to={item.link}>
                                    <NavIcon icon={item.icon} />
                                    <p>{item.name}</p>
                                </NavButton>
                            )
                        } else {
                            return (
                                <ThemeSwitcher>
                                    <NavIcon icon={item.icon} />
                                    <p>{item.name}</p>
                                </ThemeSwitcher>
                            )
                        }
                    })}
                </Nav>
            </NavWrapper>
        </NavbarWrapper>
    )
}

export default Navbar
