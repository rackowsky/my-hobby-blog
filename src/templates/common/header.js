import React from "react"
import styled from "styled-components"

import NewsletterAlert from "../../components/Alerts/newsletter_alert"
import Navbar from "../../components/Navbar/navbar"

const HeaderWrapper = styled.div`

`

const Header = () => {
    return (
        <HeaderWrapper>
            <NewsletterAlert />
            <Navbar />
        </HeaderWrapper>
    )
}

export default Header