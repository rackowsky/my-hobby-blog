import React from "react"
import { ThemeProvider } from "styled-components"

export const breakpoint = {
    desktop: 1280,
    laptop: 1124,
    tablet: 768,
    largeMobile: 600,
    mobile: 480,
}
const media = {
    desktop: `(min-width: ${breakpoint.desktop}px)`,
    laptop: `(max-width: ${breakpoint.laptop}px)`,
    tablet: `(max-width: ${breakpoint.tablet}px)`,
    largeMobile: `(max-width: ${breakpoint.largeMobile}px)`,
    mobile: `(max-width: ${breakpoint.mobile}px)`,
}
export const theme = {
    media,
}

const Theme = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme
