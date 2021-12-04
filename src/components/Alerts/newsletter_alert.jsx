import React from "react"
import styled from "styled-components"

import CloseBtn from "../../assets/svg/newsletter_alert/closeButton.svg"
import SmileSymbolSVG from "../../assets/svg/newsletter_alert/emojiSmile.svg"

const NewsletterAlertWrapper = styled.div`
    background-color: #D5D0EE;
    height: 43px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const BlankElement = styled.div``
const ParagraphInfo = styled.p`
    height: 20px;
    margin: 0;
    font-size: 16px;
    text-align: center;
    font-weight: 900;
    display: flex;
`
const CloseButton = styled.div`
    background-image: url( ${ CloseBtn } );
    background-size: 80%;
    background-repeat: no-repeat;
    background-position: center;
    height: 20px;
    width: 20px;
`
const SmileSymbol = styled.div`
    width: 20px;
    height: 20px;
    background-image: url( ${ SmileSymbolSVG } );
    background-position: center;
    margin-right: 8px;
`

const NewsletterAlert = () => {
    return (
        <NewsletterAlertWrapper>
            <BlankElement />
            <ParagraphInfo><SmileSymbol />Hey, if you want to receive the <span style={{ color: '#9680FF', textDecoration: 'underline' }}>latest</span> news subscribe to my newsletter!</ParagraphInfo>
            <CloseButton />
        </NewsletterAlertWrapper>
    )
}

export default NewsletterAlert