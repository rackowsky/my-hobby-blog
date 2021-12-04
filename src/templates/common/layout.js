import React from "react"
import styled, { createGlobalStyle } from "styled-components"

import Header from "./header"
import Footer from "./footer"

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        font-family: "Roboto Mono" !important;
    }
    body, #root {
        margin: 0;
        padding: 0;
        font-family: "Roboto Mono" !important;
    }
`
const LayoutWrapper = styled.div`
    max-width: 1920px;
    margin-left: auto;
    margin-right: auto;
`

const Layout = ( props ) => {
    return (
        <LayoutWrapper>
            <GlobalStyle />
            <Header />
            {props.children}
            <Footer />
        </LayoutWrapper>
    )
}

export default Layout