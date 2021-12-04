import React from "react"
import styled from "styled-components"

import LogoSVG from "../../assets/svg/logo_full.svg"

import NavbarMenu from "./navbarMenu"

const NavbarWrapper = styled.div`
    background-color: #1A1A1A;
    height: 100px;
    border-bottom: #ffffff1f solid 1px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 212px 0 212px;
`
const Logo = styled.div`
    width: 276px;
    height: 60px;
    background-image: url( ${ LogoSVG } );
`

const Navbar = () => {
    return (
        <NavbarWrapper>
            <Logo />
            <NavbarMenu />
        </NavbarWrapper>
    )
}

export default Navbar