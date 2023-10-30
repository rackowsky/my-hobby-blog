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
                        Morbi ullamcorper nunc in tortor dignissim, eu mollis
                        diam scelerisque. Mauris laoreet laoreet lorem sit amet
                        lobortis. Aenean hendrerit quam eget lacinia venenatis.
                        Fusce maximus velit vitae laoreet venenatis. In ac nisl
                        a turpis elementum euismod. Vestibulum vel odio mi.
                    </P>
                    <P isSecondParagraph>
                        Morbi ullamcorper nunc in tortor dignissim, eu mollis
                        diam scelerisque. Mauris laoreet laoreet lorem sit amet
                        lobortis. Aenean hendrerit quam eget lacinia venenatis.
                        Fusce maximus velit vitae laoreet venenatis. In ac nisl
                        a turpis elementum euismod. Vestibulum vel odio mi.
                    </P>
                </ContentWrapper>
            </AboutMeTemplateWrapper>
        </>
    )
}

export default AboutMeTemplate
