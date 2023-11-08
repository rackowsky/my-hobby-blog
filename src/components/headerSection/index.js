import React from "react"

import { HeaderSectionWrapper } from "./index.style"

const HeaderSection = (props) => {
    return (
        <HeaderSectionWrapper>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </HeaderSectionWrapper>
    )
}

export default HeaderSection
