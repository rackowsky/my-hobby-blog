import React from "react"

import {
    HeaderSectionWrapper,
    HeaderSectionHeader,
    HeaderSectionDeco,
} from "./index.style"

const HeaderSection = (props) => {
    return (
        <HeaderSectionWrapper>
            <HeaderSectionHeader>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </HeaderSectionHeader>
            <HeaderSectionDeco />
        </HeaderSectionWrapper>
    )
}

export default HeaderSection
