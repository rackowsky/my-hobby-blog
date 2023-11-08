import React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import { QuoteTemplateWrapper, ContentWrapper } from "./index.style"

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
            <ContentWrapper>
                <h1>Blogging is good for your career</h1>
            </ContentWrapper>
        </QuoteTemplateWrapper>
    )
}

export default QuoteTemplate
