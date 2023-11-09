import React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import {
    ContactTemplateWrapper,
    ContactContentWrapper,
    InfoWrapper,
    HandPointer,
    Placing,
} from "./index.style"

import HeaderSection from "../../../components/headerSection"
import ContactForm from "../../../components/contactForm"
import SocialMediaBar from "../../../components/socialMediaBar"

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
                <ContactContentWrapper>
                    <ContactForm />
                    <InfoWrapper>
                        <HandPointer />
                        <p>
                            <span id="isWithoutUnerline">//</span>if you want
                            contact with me just use <span>contact form</span>{" "}
                            below or found me on <span>social media</span>
                        </p>
                        <Placing>
                            <SocialMediaBar />
                        </Placing>
                    </InfoWrapper>
                </ContactContentWrapper>
            </ContactTemplateWrapper>
        </>
    )
}

export default ContactTemplate
