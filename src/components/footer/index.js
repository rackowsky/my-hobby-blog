import React from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

import {
    FooterWrapper,
    StripWrapper,
    FooterBodyWrapper,
    Content,
    LogoWrapper,
    BackgroundDecor,
} from "./index.style"

import SocialMediaBar from "../socialMediaBar"

const Footer = () => {
    const animQueueOptions = {
        triggerOnce: true,
    }
    const [ref1, inView1] = useInView(animQueueOptions)
    const [ref2, inView2] = useInView(animQueueOptions)
    const [ref3, inView3] = useInView(animQueueOptions)
    const [ref4, inView4] = useInView(animQueueOptions)
    const [ref5, inView5] = useInView(animQueueOptions)
    const [ref6, inView6] = useInView(animQueueOptions)

    return (
        <FooterWrapper
            as={motion.div}
            ref={ref6}
            initial={{
                y: 100,
                opacity: 0,
            }}
            animate={{
                y: inView6 ? 0 : 100,
                opacity: inView6 ? 1 : 0,
            }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
            }}
        >
            <FooterBodyWrapper>
                <Content
                    as={motion.div}
                    ref={ref1}
                    initial={{
                        x: -100,
                        opacity: 0,
                    }}
                    animate={{
                        x: inView1 ? 0 : -100,
                        opacity: inView1 ? 1 : 0,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                    }}
                >
                    <div>
                        <LogoWrapper>
                            <div />
                            <h4>my&nbsp;hobby&nbsp;blog</h4>
                        </LogoWrapper>
                        <p>
                            Morbi ullamcorper nunc in tortor dignissim, eu
                            mollis diam scelerisque. Mauris laoreet laoreet
                            lorem sit amet lobortis. Aenean hendrerit quam eget
                            lacinia venenatis. Fusce maximus velit vitae laoreet
                            venenatis. In ac nisl a turpis elementum euismod.
                            Vestibulum vel odio mi.
                        </p>
                    </div>
                    <SocialMediaBar isFooter />
                </Content>
                <BackgroundDecor
                    as={motion.div}
                    ref={ref2}
                    initial={{
                        x: 100,
                        opacity: 0,
                    }}
                    animate={{
                        x: inView2 ? 0 : 100,
                        opacity: inView2 ? 1 : 0,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                    }}
                />
            </FooterBodyWrapper>
            <StripWrapper>
                <motion.p
                    ref={ref3}
                    initial={{
                        clipPath: "inset(100% 0 0 0)",
                    }}
                    animate={{
                        clipPath: inView3
                            ? "inset(0 0 0 0)"
                            : "inset(100% 0 0 0)",
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 2500,
                    }}
                    style={{
                        overflow: "hidden",
                    }}
                >
                    2021 © my hobby blog
                </motion.p>
                <motion.p
                    ref={ref4}
                    initial={{
                        clipPath: "inset(100% 0 0 0)",
                    }}
                    animate={{
                        clipPath: inView4
                            ? "inset(0 0 0 0)"
                            : "inset(100% 0 0 0)",
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 2500,
                    }}
                    style={{
                        overflow: "hidden",
                    }}
                >
                    Made with ❤️ by{" "}
                    <a
                        style={{ color: "#fff" }}
                        href="https://github.com/rackowsky"
                    >
                        rackowsky
                    </a>
                </motion.p>
                <motion.div
                    ref={ref5}
                    initial={{
                        clipPath: "inset(100% 0 0 0)",
                    }}
                    animate={{
                        clipPath: inView5
                            ? "inset(0 0 0 0)"
                            : "inset(100% 0 0 0)",
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 2500,
                    }}
                    style={{
                        overflow: "hidden",
                    }}
                >
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </motion.div>
            </StripWrapper>
        </FooterWrapper>
    )
}

export default Footer
