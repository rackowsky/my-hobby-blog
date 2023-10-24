import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"

import { GlobalStyles } from "../../styles/globalStyles"
import { ThemeProvider } from "styled-components"

import { LayoutWrapper } from "./index.style"

import Navbar from "../navbar"
import Footer from "../footer"

import favicon from "../../utils/imgs/icon.png"

import { darkTheme, lightTheme } from "../../styles/theme"

const Layout = (props) => {
    // * GENERAL STATE FOR MANAGING THE STATE OF ACTUAL APEARANCE.
    const [darkMode, setDarkMode] = useState(null)

    // * TOGGLING STATE OF ACTUAL APEARANCE.
    const toggleTheme = () => {
        setDarkMode((prev) => !prev)
    }

    // * `useEffect` USED FOR DETECTING COLOR SCHEME BASED ON SYSTEM PREFERENCES.
    useEffect(() => {
        const prefersDarkMode = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches
        setDarkMode(prefersDarkMode)

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
        const handleChange = (e) => {
            setDarkMode(e.matches)
        }
        mediaQuery.addEventListener("change", handleChange)

        return () => {
            mediaQuery.removeEventListener("change", handleChange)
        }
    }, [])

    // * WHEN CALCULATING THE SYSTEM APEARANCE `return null`.
    if (darkMode === null) {
        return null
    }

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <LayoutWrapper>
                <GlobalStyles />
                <Helmet>
                    <meta charSet="utf-8" />
                    <meta
                        name="description"
                        content="My Hobby Blog - A Photography Website"
                    />
                    <title>My Hobby Blog - A Photography Website</title>
                    <link rel="canonical" href="https://sk-design.com.pl/" />
                    <link rel="icon" type="image/x-icon" href={favicon} />
                </Helmet>
                <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
                {props.children}
                <Footer />
            </LayoutWrapper>
        </ThemeProvider>
    )
}

export default Layout
