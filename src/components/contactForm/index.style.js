import styled from "styled-components"
import ViewportCalculator from "../../styles/viewportCalculator"
import { theme } from "../../styles/theme"

import sendIcon from "../../utils/imgs/send-icon.png"

export const ContactFormWrapper = styled.div`
    background: rgba(150, 128, 255, 0.8);
    box-shadow: 0 3px 50px #8065ff;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${ViewportCalculator(10, "desktop")};

    @media ${theme.media.desktop} {
        border-radius: 10px;
    }
    @media ${theme.media.laptop} {
        width: fit-content;
        border-radius: ${ViewportCalculator(10, "laptop")};
    }
    @media ${theme.media.tablet} {
        width: 100%;
        border-radius: 0;
    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: ${ViewportCalculator(20, "desktop")};
    width: ${ViewportCalculator(400, "desktop")};
    padding-top: ${ViewportCalculator(40, "desktop")};
    padding-bottom: ${ViewportCalculator(40, "desktop")};
    padding-left: ${ViewportCalculator(20, "desktop")};
    padding-right: ${ViewportCalculator(20, "desktop")};

    @media ${theme.media.desktop} {
        gap: 20px;
        width: 400px;
        padding: 40px 20px;
    }
    @media ${theme.media.laptop} {
        gap: ${ViewportCalculator(20, "laptop")};
        width: ${ViewportCalculator(400, "laptop")};
        padding-top: ${ViewportCalculator(40, "laptop")};
        padding-bottom: ${ViewportCalculator(40, "laptop")};
        padding-left: ${ViewportCalculator(20, "laptop")};
        padding-right: ${ViewportCalculator(20, "laptop")};
    }
    @media ${theme.media.tablet} {
        gap: ${ViewportCalculator(20, "tablet")};
        width: 100%;
        padding-top: ${ViewportCalculator(40, "tablet")};
        padding-bottom: ${ViewportCalculator(40, "tablet")};
        padding-left: ${ViewportCalculator(20, "tablet")};
        padding-right: ${ViewportCalculator(20, "tablet")};
    }
    @media ${theme.media.largeMobile} {
        gap: ${ViewportCalculator(20, "largeMobile")};
        width: 100%;
        padding-top: ${ViewportCalculator(40, "largeMobile")};
        padding-bottom: ${ViewportCalculator(40, "largeMobile")};
        padding-left: ${ViewportCalculator(20, "largeMobile")};
        padding-right: ${ViewportCalculator(20, "largeMobile")};
    }
    @media ${theme.media.mobile} {
        gap: ${ViewportCalculator(20, "mobile")};
        width: 100%;
        padding-top: ${ViewportCalculator(40, "mobile")};
        padding-bottom: ${ViewportCalculator(40, "mobile")};
        padding-left: ${ViewportCalculator(20, "mobile")};
        padding-right: ${ViewportCalculator(20, "mobile")};
    }

    ::placeholder {
        color: #6856bb;
    }
`
export const Input = styled.input`
    background: #fff;
    border: none;
    font-weight: 700;
    color: #6856bb;
    box-shadow: inset 0 3px 20px rgba(0, 0, 0, 0.28);
    width: 100%;
    border-radius: ${ViewportCalculator(10, "desktop")};
    font-size: ${ViewportCalculator(17, "desktop")};
    padding-top: ${ViewportCalculator(15, "desktop")};
    padding-bottom: ${ViewportCalculator(15, "desktop")};
    padding-left: ${ViewportCalculator(19, "desktop")};
    padding-right: ${ViewportCalculator(19, "desktop")};

    @media ${theme.media.desktop} {
        border-radius: 10px;
        font-size: 17px;
        padding: 15px 19px;
    }
    @media ${theme.media.laptop} {
        border-radius: ${ViewportCalculator(10, "laptop")};
        font-size: ${ViewportCalculator(17, "laptop")};
        padding-top: ${ViewportCalculator(15, "laptop")};
        padding-bottom: ${ViewportCalculator(15, "laptop")};
        padding-left: ${ViewportCalculator(19, "laptop")};
        padding-right: ${ViewportCalculator(19, "laptop")};
    }
    @media ${theme.media.tablet} {
        border-radius: ${ViewportCalculator(10, "tablet")};
        font-size: ${ViewportCalculator(17, "tablet")};
        padding-top: ${ViewportCalculator(15, "tablet")};
        padding-bottom: ${ViewportCalculator(15, "tablet")};
        padding-left: ${ViewportCalculator(19, "tablet")};
        padding-right: ${ViewportCalculator(19, "tablet")};
    }
    @media ${theme.media.largeMobile} {
        border-radius: ${ViewportCalculator(10, "largeMobile")};
        font-size: ${ViewportCalculator(17, "largeMobile")};
        padding-top: ${ViewportCalculator(15, "largeMobile")};
        padding-bottom: ${ViewportCalculator(15, "largeMobile")};
        padding-left: ${ViewportCalculator(19, "largeMobile")};
        padding-right: ${ViewportCalculator(19, "largeMobile")};
    }
    @media ${theme.media.mobile} {
        border-radius: ${ViewportCalculator(10, "mobile")};
        font-size: ${ViewportCalculator(17, "mobile")};
        padding-top: ${ViewportCalculator(15, "mobile")};
        padding-bottom: ${ViewportCalculator(15, "mobile")};
        padding-left: ${ViewportCalculator(19, "mobile")};
        padding-right: ${ViewportCalculator(19, "mobile")};
    }
`
export const TextArea = styled.textarea`
    background: #fff;
    border: none;
    font-weight: 700;
    color: #6856bb;
    box-shadow: inset 0 3px 20px rgba(0, 0, 0, 0.28);
    width: 100%;
    resize: none;
    height: ${ViewportCalculator(150, "desktop")};
    border-radius: ${ViewportCalculator(10, "desktop")};
    font-size: ${ViewportCalculator(17, "desktop")};
    padding-top: ${ViewportCalculator(15, "desktop")};
    padding-bottom: ${ViewportCalculator(15, "desktop")};
    padding-left: ${ViewportCalculator(19, "desktop")};
    padding-right: ${ViewportCalculator(19, "desktop")};

    @media ${theme.media.desktop} {
        height: 150px;
        border-radius: 10px;
        font-size: 17px;
        padding: 15px 19px;
    }
    @media ${theme.media.laptop} {
        height: ${ViewportCalculator(150, "laptop")};
        border-radius: ${ViewportCalculator(10, "laptop")};
        font-size: ${ViewportCalculator(17, "laptop")};
        padding-top: ${ViewportCalculator(15, "laptop")};
        padding-bottom: ${ViewportCalculator(15, "laptop")};
        padding-left: ${ViewportCalculator(19, "laptop")};
        padding-right: ${ViewportCalculator(19, "laptop")};
    }
    @media ${theme.media.tablet} {
        height: ${ViewportCalculator(150, "tablet")};
        border-radius: ${ViewportCalculator(10, "tablet")};
        font-size: ${ViewportCalculator(17, "tablet")};
        padding-top: ${ViewportCalculator(15, "tablet")};
        padding-bottom: ${ViewportCalculator(15, "tablet")};
        padding-left: ${ViewportCalculator(19, "tablet")};
        padding-right: ${ViewportCalculator(19, "tablet")};
    }
    @media ${theme.media.largeMobile} {
        height: ${ViewportCalculator(150, "largeMobile")};
        border-radius: ${ViewportCalculator(10, "largeMobile")};
        font-size: ${ViewportCalculator(17, "largeMobile")};
        padding-top: ${ViewportCalculator(15, "largeMobile")};
        padding-bottom: ${ViewportCalculator(15, "largeMobile")};
        padding-left: ${ViewportCalculator(19, "largeMobile")};
        padding-right: ${ViewportCalculator(19, "largeMobile")};
    }
    @media ${theme.media.mobile} {
        height: ${ViewportCalculator(150, "mobile")};
        border-radius: ${ViewportCalculator(10, "mobile")};
        font-size: ${ViewportCalculator(17, "mobile")};
        padding-top: ${ViewportCalculator(15, "mobile")};
        padding-bottom: ${ViewportCalculator(15, "mobile")};
        padding-left: ${ViewportCalculator(19, "mobile")};
        padding-right: ${ViewportCalculator(19, "mobile")};
    }
`
export const Button = styled.button`
    background: #fff;
    box-shadow: inset 0 3px 20px rgba(0, 0, 0, 0.28);
    width: 100%;
    font-weight: 700;
    color: #6856bb;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${ViewportCalculator(10, "desktop")};
    padding-top: ${ViewportCalculator(15, "desktop")};
    padding-bottom: ${ViewportCalculator(15, "desktop")};
    border-radius: ${ViewportCalculator(10, "desktop")};
    font-size: ${ViewportCalculator(17, "desktop")};

    @media ${theme.media.desktop} {
        gap: 10px;
        padding: 15px 0;
        border-radius: 10px;
        font-size: 17px;
    }
    @media ${theme.media.laptop} {
        gap: ${ViewportCalculator(10, "laptop")};
        padding-top: ${ViewportCalculator(15, "laptop")};
        padding-bottom: ${ViewportCalculator(15, "laptop")};
        border-radius: ${ViewportCalculator(10, "laptop")};
        font-size: ${ViewportCalculator(17, "laptop")};
    }
    @media ${theme.media.tablet} {
        gap: ${ViewportCalculator(10, "tablet")};
        padding-top: ${ViewportCalculator(15, "tablet")};
        padding-bottom: ${ViewportCalculator(15, "tablet")};
        border-radius: ${ViewportCalculator(10, "tablet")};
        font-size: ${ViewportCalculator(17, "tablet")};
    }
    @media ${theme.media.largeMobile} {
        gap: ${ViewportCalculator(10, "largeMobile")};
        padding-top: ${ViewportCalculator(15, "largeMobile")};
        padding-bottom: ${ViewportCalculator(15, "largeMobile")};
        border-radius: ${ViewportCalculator(10, "largeMobile")};
        font-size: ${ViewportCalculator(17, "largeMobile")};
    }
    @media ${theme.media.mobile} {
        gap: ${ViewportCalculator(10, "mobile")};
        padding-top: ${ViewportCalculator(15, "mobile")};
        padding-bottom: ${ViewportCalculator(15, "mobile")};
        border-radius: ${ViewportCalculator(10, "mobile")};
        font-size: ${ViewportCalculator(17, "mobile")};
    }
`
export const SendIcon = styled.div`
    background: no-repeat center/contain url(${sendIcon});
    height: ${ViewportCalculator(20, "desktop")};
    aspect-ratio: 1/1;
    display: inline-block;

    @media ${theme.media.desktop} {
        height: 20px;
    }
    @media ${theme.media.laptop} {
        height: ${ViewportCalculator(20, "laptop")};
    }
    @media ${theme.media.tablet} {
        height: ${ViewportCalculator(20, "tablet")};
    }
    @media ${theme.media.largeMobile} {
        height: ${ViewportCalculator(20, "largeMobile")};
    }
    @media ${theme.media.mobile} {
        height: ${ViewportCalculator(20, "mobile")};
    }
`
export const FormInfo = styled.div`
    font-weight: 700;
    color: #fff;
    margin-top: -${ViewportCalculator(10, "desktop")};
    font-size: ${ViewportCalculator(13, "desktop")};

    @media ${theme.media.desktop} {
        margin-top: -10px;
        font-size: 13px;
    }
    @media ${theme.media.laptop} {
        margin-top: -${ViewportCalculator(10, "laptop")};
        font-size: ${ViewportCalculator(13, "laptop")};
    }
    @media ${theme.media.tablet} {
        margin-top: -${ViewportCalculator(10, "tablet")};
        font-size: ${ViewportCalculator(13, "tablet")};
    }
    @media ${theme.media.largeMobile} {
        margin-top: -${ViewportCalculator(10, "largeMobile")};
        font-size: ${ViewportCalculator(13, "largeMobile")};
    }
    @media ${theme.media.mobile} {
        margin-top: -${ViewportCalculator(10, "mobile")};
        font-size: ${ViewportCalculator(13, "mobile")};
    }
`
export const InfoBeforeForm = styled.p`
    position: absolute;
    font-weight: 700;
    background: #fff;
    box-shadow: inset 0 3px 20px rgba(0, 0, 0, 0.28);
    color: #6856bb;
    padding-top: ${ViewportCalculator(11, "desktop")};
    padding-bottom: ${ViewportCalculator(11, "desktop")};
    padding-left: ${ViewportCalculator(20, "desktop")};
    padding-right: ${ViewportCalculator(20, "desktop")};
    border-radius: ${ViewportCalculator(10, "desktop")};
    left: -${ViewportCalculator(30, "desktop")};
    top: -${ViewportCalculator(20, "desktop")};
    font-size: ${ViewportCalculator(13, "desktop")};

    @media ${theme.media.desktop} {
        padding: 11px 20px;
        border-radius: 10px;
        left: -30px;
        top: -20px;
        font-size: 13px;
    }
    @media ${theme.media.laptop} {
        padding-top: ${ViewportCalculator(11, "laptop")};
        padding-bottom: ${ViewportCalculator(11, "laptop")};
        padding-left: ${ViewportCalculator(20, "laptop")};
        padding-right: ${ViewportCalculator(20, "laptop")};
        border-radius: ${ViewportCalculator(10, "laptop")};
        left: -${ViewportCalculator(30, "laptop")};
        top: -${ViewportCalculator(20, "laptop")};
        font-size: ${ViewportCalculator(13, "laptop")};
    }
    @media ${theme.media.tablet} {
        padding-top: ${ViewportCalculator(11, "tablet")};
        padding-bottom: ${ViewportCalculator(11, "tablet")};
        padding-left: ${ViewportCalculator(20, "tablet")};
        padding-right: ${ViewportCalculator(20, "tablet")};
        border-radius: ${ViewportCalculator(10, "tablet")};
        left: ${ViewportCalculator(15, "tablet")};
        top: -${ViewportCalculator(20, "tablet")};
        font-size: ${ViewportCalculator(13, "tablet")};
    }
    @media ${theme.media.largeMobile} {
        padding-top: ${ViewportCalculator(11, "largeMobile")};
        padding-bottom: ${ViewportCalculator(11, "largeMobile")};
        padding-left: ${ViewportCalculator(20, "largeMobile")};
        padding-right: ${ViewportCalculator(20, "largeMobile")};
        border-radius: ${ViewportCalculator(10, "largeMobile")};
        left: ${ViewportCalculator(15, "largeMobile")};
        top: -${ViewportCalculator(20, "largeMobile")};
        font-size: ${ViewportCalculator(13, "largeMobile")};
    }
    @media ${theme.media.mobile} {
        padding-top: ${ViewportCalculator(11, "mobile")};
        padding-bottom: ${ViewportCalculator(11, "mobile")};
        padding-left: ${ViewportCalculator(20, "mobile")};
        padding-right: ${ViewportCalculator(20, "mobile")};
        border-radius: ${ViewportCalculator(10, "mobile")};
        left: ${ViewportCalculator(15, "mobile")};
        top: -${ViewportCalculator(20, "mobile")};
        font-size: ${ViewportCalculator(13, "mobile")};
    }
`
export const ResultInfo = styled.div`
    font-weight: 700;
    width: 75%;
    text-align: center;
    color: #fff;
    font-size: ${ViewportCalculator(40, "desktop")};
    padding-top: ${ViewportCalculator(15, "desktop")};
    padding-bottom: ${ViewportCalculator(15, "desktop")};
    padding-left: ${ViewportCalculator(25, "desktop")};
    padding-right: ${ViewportCalculator(25, "desktop")};

    @media ${theme.media.desktop} {
        font-size: 40px;
        padding: 15px 25px;
    }
    @media ${theme.media.laptop} {
        font-size: ${ViewportCalculator(40, "laptop")};
        padding-top: ${ViewportCalculator(15, "laptop")};
        padding-bottom: ${ViewportCalculator(15, "laptop")};
        padding-left: ${ViewportCalculator(25, "laptop")};
        padding-right: ${ViewportCalculator(25, "laptop")};
    }
    @media ${theme.media.tablet} {
        font-size: ${ViewportCalculator(40, "tablet")};
        padding-top: ${ViewportCalculator(15, "tablet")};
        padding-bottom: ${ViewportCalculator(15, "tablet")};
        padding-left: ${ViewportCalculator(25, "tablet")};
        padding-right: ${ViewportCalculator(25, "tablet")};
    }
    @media ${theme.media.largeMobile} {
        font-size: ${ViewportCalculator(40, "largeMobile")};
        padding-top: ${ViewportCalculator(15, "largeMobile")};
        padding-bottom: ${ViewportCalculator(15, "largeMobile")};
        padding-left: ${ViewportCalculator(25, "largeMobile")};
        padding-right: ${ViewportCalculator(25, "largeMobile")};
    }
    @media ${theme.media.mobile} {
        font-size: ${ViewportCalculator(40, "mobile")};
        padding-top: ${ViewportCalculator(15, "mobile")};
        padding-bottom: ${ViewportCalculator(15, "mobile")};
        padding-left: ${ViewportCalculator(25, "mobile")};
        padding-right: ${ViewportCalculator(25, "mobile")};
    }
`
