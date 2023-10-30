import React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import { ContactTemplateWrapper } from "./index.style"
import HeaderSection from "../../../components/headerSection"

const ContactTemplate = () => {
    const animQueueOptions = {
        triggerOnce: true,
    }
    const [ref1, inView1] = useInView(animQueueOptions)
    const [ref2, inView2] = useInView(animQueueOptions)

    return (
        <>
            <div
                id="contact"
                style={{
                    height: "10px",
                    marginTop: "-150px",
                    position: "absolute",
                }}
            />
            <ContactTemplateWrapper
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
                    title="Contact"
                    description="let's be in touch..."
                />
            </ContactTemplateWrapper>
        </>
    )
}

export default ContactTemplate
