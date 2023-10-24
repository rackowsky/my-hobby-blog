import React, { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import styled from "styled-components"

import {
    GlobalNavbarStyle,
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
    MobileBtn,
    MobileNav,
    Break,
    MobileMenuLayout,
    DrawingHills,
} from "./index.style"

import aboutMeIcon from "../../utils/imgs/nav/about-me.png"
import myBlogIcon from "../../utils/imgs/nav/my-blog.png"
import ContactIcon from "../../utils/imgs/nav/contact.png"
import ThemeIcon from "../../utils/imgs/nav/theme.png"

import SocialMediaBar from "../socialMediaBar"

import particles_elipse from "../../utils/svgs/particles-elipse.svg"
import camera_element from "../../utils/imgs/logo.png"

const Navbar = ({ toggleTheme, darkMode }) => {
    const [showMenu, setShowMenu] = useState(false)
    const [showOverflow_Nav, setShowOverflow_Nav] = useState(true)

    const controls = useAnimation()
    const { ref, inView } = useInView()

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
        if (!inView) {
            controls.start("hidden")
        }
    }, [controls, inView])

    const NavBarVariant = {
        hidden: { y: -100 },
        visible: {
            y: 0,
        },
    }
    const MobileNavBarVariant = {
        hidden: { scale: 0 },
        visible: {
            scale: 1,
            transition: {
                duration: 0.1,
            },
        },
    }
    const MobileNavBarVariantSlide = {
        hidden: { y: 100 },
        visible: {
            y: 0,
            transition: {
                duration: 0.3,
            },
        },
    }

    const calculateDelay = (index) => {
        return index * 0.075
    }
    const onAnimationComplete_Nav = () => {
        setShowOverflow_Nav(false)
    }

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
            name: darkMode ? "dark theme" : "light theme",
            isThemeSwitcher: true,
        },
    ]

    const particlesRandomizer = () => {
        const elements = []
        for (let i = 0; i < 10; i++) {
            const randomTop = Math.floor(Math.random() * window.innerHeight)
            const randomLeft = Math.floor(Math.random() * window.innerWidth)
            const halfScreenWidth = window.innerWidth / 2
            const halfScreenHeight = window.innerHeight / 2

            const randomAspect = 5 + Math.random() * 7

            const background =
                Math.random() < 0.5 ? particles_elipse : camera_element

            const Element = styled.div`
                background: no-repeat center/contain url(${background});
                height: 68px;
                aspect-ratio: 1/1;
                position: absolute;
                z-index: -1;
                top: ${randomTop}px;
                left: ${randomLeft}px;
                animation-name: floating;
                animation-duration: ${randomAspect}s;
                animation-iteration-count: infinite;
                opacity: 0.35;

                @keyframes floating {
                    0% {
                        transform: translate(0) rotate(0);
                    }
                    25% {
                        transform: translate(${randomAspect}px, 3px)
                            rotate(3deg);
                    }
                    75% {
                        transform: translate(-3px, -${randomAspect}px)
                            rotate(-3deg);
                    }
                    100% {
                        transform: translate(0) rotate(0);
                    }
                }
            `

            if (
                randomTop > window.innerHeight ||
                randomLeft > window.innerWidth
            ) {
                const newRandomTop = Math.floor(
                    Math.random() * halfScreenHeight
                )
                const newRandomLeft = Math.floor(
                    Math.random() * halfScreenWidth
                )
                elements.push(
                    <Element
                        key={i}
                        style={{ top: newRandomTop, left: newRandomLeft }}
                    />
                )
            } else {
                elements.push(<Element key={i} />)
            }
        }

        return elements
    }

    return (
        <>
            <GlobalNavbarStyle setShowMenu={showMenu} />
            <NavbarWrapper>
                <AlertWrapper>
                    <Emoji darkMode={darkMode} />
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
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={NavBarVariant}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 20,
                        }}
                        whileHover={{ scale: 1.04, rotate: 0.2 }}
                        whileTap={{ scale: 0.975 }}
                    >
                        <LogoWrapper to="/">
                            <Logo />
                            <p>my&nbsp;hobby&nbsp;blog</p>
                        </LogoWrapper>
                    </motion.div>
                    <Nav>
                        {NavData.map((item) => {
                            if (item.isThemeSwitcher !== true) {
                                return (
                                    <motion.div
                                        initial="hidden"
                                        animate="visible"
                                        variants={NavBarVariant}
                                        transition={{
                                            delay: showOverflow_Nav
                                                ? calculateDelay(item.id)
                                                : 0,
                                            type: "spring",
                                            stiffness: 200,
                                            damping: 20,
                                        }}
                                        whileHover={{
                                            scale: 1.04,
                                            rotate: 0.2,
                                        }}
                                        whileTap={{ scale: 0.975 }}
                                        onAnimationComplete={
                                            onAnimationComplete_Nav
                                        }
                                    >
                                        <NavButton id={item.id} to={item.link}>
                                            <NavIcon
                                                icon={item.icon}
                                                id={item.id}
                                                darkMode={darkMode}
                                            />
                                            <p id={item.id}>{item.name}</p>
                                        </NavButton>
                                    </motion.div>
                                )
                            } else {
                                return (
                                    <motion.div
                                        initial="hidden"
                                        animate="visible"
                                        variants={NavBarVariant}
                                        transition={{
                                            delay: showOverflow_Nav
                                                ? calculateDelay(item.id)
                                                : 0,
                                            type: "spring",
                                            stiffness: 200,
                                            damping: 20,
                                        }}
                                        whileHover={{
                                            scale: 1.04,
                                            rotate: 0.2,
                                        }}
                                        whileTap={{ scale: 0.975 }}
                                        onAnimationComplete={
                                            onAnimationComplete_Nav
                                        }
                                    >
                                        <ThemeSwitcher
                                            onClick={toggleTheme}
                                            id={item.id}
                                        >
                                            <NavIcon
                                                icon={item.icon}
                                                id={item.id}
                                                darkMode={darkMode}
                                            />
                                            <p id={item.id}>{item.name}</p>
                                        </ThemeSwitcher>
                                    </motion.div>
                                )
                            }
                        })}
                    </Nav>
                    <MobileBtn
                        setShowMenu={showMenu}
                        onClick={() => setShowMenu(!showMenu)}
                        as={motion.div}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 20,
                        }}
                        whileHover={{
                            scale: 1.15,
                            rotate: 0.2,
                        }}
                        whileTap={{ scale: 0.975 }}
                        initial="hidden"
                        animate="visible"
                        variants={NavBarVariant}
                    />

                    <MobileNav
                        setShowMenu={showMenu}
                        onClick={() => setShowMenu(!showMenu)}
                        as={motion.div}
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={MobileNavBarVariantSlide}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 20,
                        }}
                    >
                        <MobileMenuLayout>
                            {NavData.map((item) => {
                                if (item.isThemeSwitcher !== true) {
                                    return (
                                        <motion.div
                                            key={item.id}
                                            ref={ref}
                                            initial="hidden"
                                            animate={controls}
                                            variants={MobileNavBarVariant}
                                            transition={{
                                                type: "spring",
                                                stiffness: 200,
                                                damping: 20,
                                            }}
                                        >
                                            <NavButton
                                                id={item.id}
                                                to={item.link}
                                            >
                                                <NavIcon
                                                    icon={item.icon}
                                                    id={item.id}
                                                    darkMode={darkMode}
                                                />
                                                <p id={item.id}>{item.name}</p>
                                            </NavButton>
                                        </motion.div>
                                    )
                                } else {
                                    return (
                                        <ThemeSwitcher
                                            key={item.id}
                                            ref={ref}
                                            initial="hidden"
                                            animate={controls}
                                            variants={MobileNavBarVariant}
                                            onClick={toggleTheme}
                                            as={motion.div}
                                            transition={{
                                                type: "spring",
                                                stiffness: 200,
                                                damping: 20,
                                            }}
                                        >
                                            <NavIcon
                                                icon={item.icon}
                                                id={item.id}
                                                darkMode={darkMode}
                                            />
                                            <p id={item.id}>{item.name}</p>
                                        </ThemeSwitcher>
                                    )
                                }
                            })}
                        </MobileMenuLayout>
                        <SocialMediaBar />
                        {particlesRandomizer()}
                        <DrawingHills />
                    </MobileNav>
                </NavWrapper>
            </NavbarWrapper>
            <Break />
        </>
    )
}

export default Navbar
