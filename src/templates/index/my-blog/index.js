import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { breakpoint } from "../../../styles/theme"

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
        title: "Embracing Shadows: A Dance of Contrasts and Whispers",
        description:
            "Embark on a visual odyssey where the interplay of shadows and light paints a nuanced tapestry. Explore elusive moments that unfold in a poetic dance of contrasts, whispering stories through every frame.",
        thumbnail: thumb1,
    },
    {
        id: 2,
        title: "Nature's Melody: Symphony in the Serenity of Silence",
        description:
            "Immerse yourself in the profound poetry of the great outdoors. Each photograph captures a narrative woven by the gentle rustle of leaves and the tranquil symphony of nature, creating a timeless melody.",
        thumbnail: thumb2,
    },
    {
        id: 3,
        title: "Faces in Unlikely Spaces: Candid Chronicles of Authenticity",
        description:
            "Uncover the art of capturing genuine expressions thriving in unexpected places. Join me as I reveal hidden narratives etched on faces, celebrating the beauty and authenticity of unguarded moments.",
        thumbnail: thumb3,
    },
    {
        id: 4,
        title: "Urban Elegance: Discovering Beauty Amidst Cityscapes",
        description:
            "Embark on a journey through the urban landscape, where towering structures and hidden corners reveal a unique elegance. Each photograph encapsulates the grace found in the heart of bustling cityscapes.",
        thumbnail: thumb4,
    },
    {
        id: 5,
        title: "Abstract Realities: Transforming Ordinary Scenes into Extraordinary Narratives",
        description:
            "Delve into a world where reality meets abstraction. Through unconventional angles and perspectives, witness ordinary scenes transformed into extraordinary visual narratives, inviting you to see the familiar in a new light.",
        thumbnail: thumb5,
    },
    {
        id: 6,
        title: "Sunset Chronicles: Capturing the Mesmerizing Hues of Golden Hours",
        description:
            "Experience the enchantment of golden hours as I chronicle the vibrant and ever-changing hues of sunsets. Each photograph serves as a chapter in the captivating story painted by the setting sun, inviting you to savor the beauty of twilight.",
        thumbnail: thumb6,
    },
]

const MyBlogTemplate = () => {
    const animQueueOptions = {
        triggerOnce: true,
    }
    const [ref1, inView1] = useInView(animQueueOptions)
    const [ref2, inView2] = useInView(animQueueOptions)

    const [itemsAmount, setItemsAmount] = useState(6)
    function handleResize() {
        const ViewportWidth = window.innerWidth
        const tabletWidth = breakpoint.tablet

        if (ViewportWidth <= tabletWidth) {
            setItemsAmount(3)
        } else {
            setItemsAmount(6)
        }
    }
    useEffect(() => {
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

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
                    {blogData.slice(0, itemsAmount).map((item) => {
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
                                    <Thumbnail urlThumb={item.thumbnail} />
                                </ContentItemWrapper>
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
