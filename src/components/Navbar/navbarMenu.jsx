import React from "react"
import styled from "styled-components"

const UL = styled.ul`
    margin: 0;
    list-style-type: none;
    display: flex;
`
const LI = styled.li`
    display: flex;
    align-items: center;
    background-color: #9680FF;
    margin-left: 20px;
    border-radius: 10px;
    padding: 7.5px;
    font-size: 12px;
`
const IconSymbol = styled.div`
    width: 14px;
    height: 14px;
    margin-right: 5px;
`

const NavbarMenu = () => {
    return (
        <UL>
            <LI><IconSymbol id="AboutMeIcon" /><p>about me</p></LI>
            <LI><IconSymbol id="MyBlogIcon"  /><p>my blog</p></LI>
            <LI><IconSymbol id="ContactIcon"  /><p>contact</p></LI>
            <LI><IconSymbol id="LightThemeIcon"  /><p>light theme</p></LI>
        </UL>
    )
}

export default NavbarMenu