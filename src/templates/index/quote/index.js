import React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import {
    QuoteTemplateWrapper,
    QuoteContentWrapper,
    Placing,
} from "./index.style"
import SocialMediaBar from "../../../components/socialMediaBar"

const QuoteTemplate = () => {
    const animQueueOptions = {
        triggerOnce: true,
    }
    const [ref1, inView1] = useInView(animQueueOptions)
    const [ref2, inView2] = useInView(animQueueOptions)

    return (
        <QuoteTemplateWrapper
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
            <QuoteContentWrapper
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
                <h1>
                    <span>Blogging</span> is good for your career
                </h1>
            </QuoteContentWrapper>
            <Placing>
                <SocialMediaBar />
            </Placing>
        </QuoteTemplateWrapper>
    )
}

export default QuoteTemplate
