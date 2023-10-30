import React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import {
    MyBlogTemplateWrapper,
    ContentWrapper,
    Button,
    ItemWrapper,
    ContentItemWrapper,
    Thumbnail,
} from "./index.style"

import HeaderSection from "../../../components/headerSection"

import thumb1 from "../../../utils/imgs/blogThumbs/1.png"
import thumb2 from "../../../utils/imgs/blogThumbs/2.png"
import thumb3 from "../../../utils/imgs/blogThumbs/3.png"
import thumb4 from "../../../utils/imgs/blogThumbs/4.png"
import thumb5 from "../../../utils/imgs/blogThumbs/5.png"
import thumb6 from "../../../utils/imgs/blogThumbs/6.png"

const blogData = [
    {
        id: 1,
        title: "Nam commodo magna a est dictum commodo. Vivamus quis pulvinar",
        description:
            "Nunc aliquet, augue vel iaculis cursus, neque velit aliquam ante, at congue arcu nibh luctus enim. Aliquam erat volutpat. Proin a mi elit. Aenean eleifend mi risus, vitae fringilla metus luctus consequat",
        thumbnail: thumb1,
    },
    {
        id: 2,
        title: "Phasellus eros dolor, interdum a interdum ac, finibus sit",
        description:
            "Nunc aliquet, augue vel iaculis cursus, neque velit aliquam ante, at congue arcu nibh luctus enim. Aliquam erat volutpat. Proin a mi elit. Aenean eleifend mi risus, vitae fringilla metus luctus consequat",
        thumbnail: thumb2,
    },
    {
        id: 3,
        title: "amet leo. Pellentesque hendrerit tempor feugiat.",
        description:
            "Phasellus eros dolor, interdum a interdum ac, finibus sit amet leo. Pellentesque hendrerit tempor feugiat. Duis sit amet massa nulla. Ut eget purus maximus magna rutrum finibus. Fusce rhoncus arcu et leo commodo",
        thumbnail: thumb3,
    },
    {
        id: 4,
        title: "Duis sit amet massa nulla. Aliquam sit amet nulla ",
        description:
            "Aliquam sit amet nulla quis neque feugiat venenatis. Sed non ultricies nulla. Nunc ut lorem vitae massa auctor ultricies. Donec sed felis a nibh elementum elementum vitae vel turpis. Mauris at nisi ut nunc congue tristique",
        thumbnail: thumb4,
    },
    {
        id: 5,
        title: "Praesent laoreet, ligula nec mattis aliquam, erat",
        description:
            "Etiam cursus mauris a arcu egestas, a aliquet ipsum facilisis. Maecenas pretium lorem in erat laoreet, at rutrum justo dapibus. Nunc rhoncus venenatis est. In at fringilla nibh",
        thumbnail: thumb5,
    },
    {
        id: 6,
        title: "nibh luctus ex, eu vulputate eros lacus eu orci.",
        description:
            "Cras gravida non dui et eleifend. Nam commodo magna a est dictum commodo. Vivamus quis pulvinar magna. Etiam id magna at sapien dapibus tempus. Fusce tristique lacinia tristique. Nulla ullamcorper nibh in molestie dictum",
        thumbnail: thumb6,
    },
]

const MyBlogTemplate = () => {
    const animQueueOptions = {
        triggerOnce: true,
    }
    const [ref1, inView1] = useInView(animQueueOptions)
    const [ref2, inView2] = useInView(animQueueOptions)

    return (
        <>
            <div
                id="my_blog"
                style={{
                    height: "10px",
                    marginTop: "-150px",
                    position: "absolute",
                }}
            />
            <MyBlogTemplateWrapper
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
                    title="My blog"
                    description="latest articles..."
                />
                <ContentWrapper>
                    {blogData.map((item) => {
                        return (
                            <ItemWrapper
                                as={motion.div}
                                transition={{
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 20,
                                }}
                                whileHover={{
                                    scale: 1.015,
                                    rotate: 0.2,
                                }}
                                whileTap={{ scale: 0.975 }}
                            >
                                <ContentItemWrapper>
                                    <div>
                                        <p>{"0" + item.id + "."}</p>
                                        <h1>{item.title}</h1>
                                    </div>
                                    <h2>{item.description}</h2>
                                </ContentItemWrapper>
                                <Thumbnail urlThumb={item.thumbnail} />
                            </ItemWrapper>
                        )
                    })}
                </ContentWrapper>
                <Button
                    as={motion.div}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                    }}
                    whileHover={{
                        scale: 1.05,
                        rotate: 0.2,
                    }}
                    whileTap={{ scale: 0.975 }}
                >
                    View more articles
                </Button>
            </MyBlogTemplateWrapper>
        </>
    )
}

export default MyBlogTemplate
