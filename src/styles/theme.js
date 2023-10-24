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

export const lightTheme = {
    bodyBackground: "#D5D0EE",
    invertColorMenu: "0",
    text: "#D5D0EE",
    borderColor: "#0001",
    infoBackground: "#131313",
    logoTextColor: "#131313",
    navBackground: "#000",
    navTextColor: "#fff",
    socialMediaBarBackground: "#D5D0EE",
}
export const darkTheme = {
    bodyBackground: "#1A1A1A",
    invertColorMenu: "1",
    text: "#000",
    borderColor: "#fff1",
    infoBackground: "#D5D0EE",
    logoTextColor: "#fff",
    navBackground: "#9680ff",
    navTextColor: "#131313",
    socialMediaBarBackground: "#9680FF",
}
