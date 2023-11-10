import React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import { AboutMeTemplateWrapper, ContentWrapper, P } from "./index.style"

import HeaderSection from "../../../components/headerSection"

const AboutMeTemplate = () => {
    const animQueueOptions = {
        triggerOnce: true,
    }
    const [ref1, inView1] = useInView(animQueueOptions)
    const [ref2, inView2] = useInView(animQueueOptions)

    return (
        <>
            <div
                id="about_me"
                style={{
                    height: "10px",
                    marginTop: "-150px",
                    position: "absolute",
                }}
            />
            <AboutMeTemplateWrapper
                as={motion.div}
                ref={ref1}
                initial={{
                    y: 100,
                    opacity: 0,
                }}
                animate={{
                    y: inView1 ? 0 : 100,
                    opacity: inView1 ? 1 : 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                }}
            >
                <HeaderSection
                    title="About me"
                    description="a few words about me..."
                />
                <ContentWrapper>
                    <P>
                        Embarking on a visual odyssey, my photography hobby is
                        more than a pastime - it's a narrative crafted through
                        the lens. In the dance of light and shadow, I strive to
                        encapsulate the essence of moments, translating them
                        into timeless stories.
                    </P>
                    <P isSecondParagraph>
                        Whether it's the warmth of a golden hour sunset or the
                        quiet intimacy of a candid glance, each frame is a
                        canvas for emotion. Join me as I explore the tapestry of
                        life, where every click is a brushstroke painting a
                        vivid portrait of the world around us.
                    </P>
                </ContentWrapper>
            </AboutMeTemplateWrapper>
        </>
    )
}

export default AboutMeTemplate
