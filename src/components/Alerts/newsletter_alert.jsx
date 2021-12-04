import React from "react"
import styled from "styled-components"

import CloseBtn from "../../assets/svg/closeButton.svg"
import { HeaderData } from "../../data/header_data"

const NewsletterAlertWrapper = styled.div`
    background-color: #D5D0EE;
    height: 43px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const BlankElement = styled.div``
const ParagraphInfo = styled.div`
    height: 20px;
`
const CloseButton = styled.div`
    background-image: url( ${ CloseBtn } );
    background-size: 80%;
    background-repeat: no-repeat;
    background-position: center;
    height: 20px;
    width: 20px;
`



const NewsletterAlert = () => {
    return (
        <NewsletterAlertWrapper>
            <BlankElement />
            <ParagraphInfo>
                { HeaderData.newsletterInfo }
            </ParagraphInfo>
            <CloseButton />
        </NewsletterAlertWrapper>
    )
}

export default NewsletterAlert