import React, { useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import {
    ContactFormWrapper,
    Form,
    Input,
    TextArea,
    Button,
    FormInfo,
    SendIcon,
    InfoBeforeForm,
    ResultInfo,
} from "./index.style"

const ContactForm = () => {
    const [isSent, setIsSent] = useState(false)

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email.")
                .required("This field is required."),
            message: Yup.string().required("This field is required."),
        }),
        onSubmit: (values) => {
            setIsSent(true)
        },
    })

    const animQueueOptions = {
        triggerOnce: true,
    }
    const [ref1, inView1] = useInView(animQueueOptions)
    const [ref2, inView2] = useInView(animQueueOptions)

    return (
        <ContactFormWrapper>
            {!isSent ? (
                <>
                    <InfoBeforeForm>
                        fill all field and just send
                    </InfoBeforeForm>
                    <Form onSubmit={formik.handleSubmit}>
                        <motion.div
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 20,
                            }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 1 }}
                        >
                            <Input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Your name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                                autoComplete="name"
                            />
                        </motion.div>
                        <motion.div
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 20,
                            }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 1 }}
                        >
                            <Input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Your email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                autoComplete="email"
                            />
                        </motion.div>
                        {formik.touched.email && formik.errors.email ? (
                            <FormInfo>{formik.errors.email}</FormInfo>
                        ) : null}
                        <motion.div
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 20,
                            }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 1 }}
                        >
                            <TextArea
                                type="text"
                                name="message"
                                id="message"
                                placeholder="Your message"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.message}
                            />
                        </motion.div>
                        {formik.touched.message && formik.errors.message ? (
                            <FormInfo>{formik.errors.message}</FormInfo>
                        ) : null}
                        <motion.div
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 20,
                            }}
                            whileHover={{ scale: 1.025 }}
                            whileTap={{ scale: 0.975 }}
                        >
                            <Button>
                                Send <SendIcon />
                            </Button>
                        </motion.div>
                    </Form>
                </>
            ) : (
                <ResultInfo>message has been sent!</ResultInfo>
            )}
        </ContactFormWrapper>
    )
}

export default ContactForm
