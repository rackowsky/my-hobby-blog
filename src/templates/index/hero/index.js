import React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import { HeroTemplateWrapper, HeroContentWrapper, Placing } from "./index.style"
import SocialMediaBar from "../../../components/socialMediaBar"

const HeroTemplate = () => {
    const animQueueOptions = {
        triggerOnce: true,
    }
    const [ref1, inView1] = useInView(animQueueOptions)
    const [ref2, inView2] = useInView(animQueueOptions)

    return (
        <HeroTemplateWrapper
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
            <HeroContentWrapper
                as={motion.div}
                ref={ref2}
                initial={{
                    y: 100,
                    opacity: 0,
                }}
                animate={{
                    y: inView2 ? 0 : 100,
                    opacity: inView2 ? 1 : 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                }}
            >
                <h1>my hobby blog</h1>
                <p>
                    my personal blog about <span>photography</span>
                </p>
            </HeroContentWrapper>
            <Placing>
                <SocialMediaBar />
            </Placing>
        </HeroTemplateWrapper>
    )
}

export default HeroTemplate
