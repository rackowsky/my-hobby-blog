import React from "react"
import styled, { createGlobalStyle } from "styled-components"

import AboutMeIcon from "../../assets/svg/navbar_icons/1.svg"
import MyBlogIcon from "../../assets/svg/navbar_icons/2.svg"
import ContactIcon from "../../assets/svg/navbar_icons/3.svg"
import LightThemeIcon from "../../assets/svg/navbar_icons/4.svg"

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
        background-color: #1A1A1A;
    }
    p {
        margin: 0;
    }

    //navbar icons
    #AboutMeIcon {background-image: url( ${ AboutMeIcon } );}
    #MyBlogIcon {background-image: url( ${ MyBlogIcon } );}
    #ContactIcon {background-image: url( ${ ContactIcon } );}
    #LightThemeIcon {background-image: url( ${ LightThemeIcon } );}
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