import React from "react"
import { motion } from "framer-motion"

import { SocialMediaBarWrapper, Icon } from "./index.style"

import facebook from "../../utils/svgs/socialMediaBar/facebook_icon.svg"
import github from "../../utils/svgs/socialMediaBar/github_icon.svg"
import telegram from "../../utils/svgs/socialMediaBar/telegram_icon.svg"

const socialMediaBarData = [
    {
        id: 1,
        name: "Facebook",
        link: "#",
        icon: facebook,
    },
    {
        id: 2,
        name: "GitHub",
        link: "https://github.com/rackowsky",
        icon: github,
    },
    {
        id: 3,
        name: "Telegram",
        link: "#",
        icon: telegram,
    },
]

const SocialMediaBar = () => {
    return (
        <SocialMediaBarWrapper>
            {socialMediaBarData.map((item) => {
                return (
                    <Icon
                        key={item.id}
                        iconBackground={item.icon}
                        href={item.link}
                        as={motion.a}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 20,
                        }}
                        whileHover={{
                            scale: 1.2,
                            rotate: 0.9,
                        }}
                        whileTap={{ scale: 0.975 }}
                    />
                )
            })}
        </SocialMediaBarWrapper>
    )
}

export default SocialMediaBar
