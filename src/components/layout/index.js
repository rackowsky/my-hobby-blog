import React from "react"
import { Helmet } from "react-helmet"

import Theme from "../../styles/theme"

import { GlobalStyles } from "../../styles/globalStyles"

import { LayoutWrapper } from "./index.style"

import Navbar from "../navbar"
import Footer from "../footer"

import favicon from "../../utils/imgs/icon.png"

const Layout = (props) => {
    return (
        <Theme>
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
                <Navbar />
                {props.children}
                <Footer />
            </LayoutWrapper>
        </Theme>
    )
}

export default Layout
