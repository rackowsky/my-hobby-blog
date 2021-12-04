import React from "react"
import styled from "styled-components"

import NewsletterAlert from "../../components/Alerts/newsletter_alert"

const HeaderWrapper = styled.div`

`

const Header = () => {
    return (
        <HeaderWrapper>
            <NewsletterAlert />
        </HeaderWrapper>
    )
}

export default Header