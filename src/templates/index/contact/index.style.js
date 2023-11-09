import styled from "styled-components"

import { theme } from "../../../styles/theme"
import ViewportCalculator from "../../../styles/viewportCalculator"

import bodyBackground from "../../../utils/imgs/bodyBg/contact.png"
import handPointer from "../../../utils/imgs/hand-pointer.png"

export const ContactTemplateWrapper = styled.div`
    background: no-repeat center/cover url(${bodyBackground}) #8e77ff;
    margin-top: ${ViewportCalculator(25, "desktop")};
    margin-bottom: ${ViewportCalculator(70, "desktop")};
    margin-left: ${ViewportCalculator(100, "desktop")};
    margin-right: ${ViewportCalculator(100, "desktop")};
    padding: ${ViewportCalculator(15, "desktop")};
    border-radius: ${ViewportCalculator(45, "desktop")};
    box-shadow: 0px 3px 85px ${(props) => props.theme.bodyShadowColor};

    @media ${theme.media.desktop} {
        margin: 50px 100px;
        border-radius: 45px;
        padding: 15px;
    }
    @media ${theme.media.laptop} {
        margin-top: ${ViewportCalculator(25, "laptop")};
        margin-bottom: ${ViewportCalculator(70, "laptop")};
        margin-left: ${ViewportCalculator(50, "laptop")};
        margin-right: ${ViewportCalculator(50, "laptop")};
        border-radius: ${ViewportCalculator(45, "laptop")};
        padding: ${ViewportCalculator(15, "laptop")};
    }
    @media ${theme.media.tablet} {
        margin-top: ${ViewportCalculator(25, "tablet")};
        margin-bottom: ${ViewportCalculator(25, "tablet")};
        margin-left: 0;
        margin-right: 0;
        border-radius: 0;
        padding: 0;
        padding-top: ${ViewportCalculator(15, "tablet")};
        padding-bottom: ${ViewportCalculator(15, "tablet")};
    }
    @media ${theme.media.largeMobile} {
        margin-top: ${ViewportCalculator(25, "largeMobile")};
        margin-bottom: ${ViewportCalculator(50, "largeMobile")};
    }
    @media ${theme.media.mobile} {
        margin-top: ${ViewportCalculator(25, "mobile")};
        margin-bottom: ${ViewportCalculator(50, "mobile")};
    }
`
export const ContactContentWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    gap: ${ViewportCalculator(70, "desktop")};
    margin-top: ${ViewportCalculator(75, "desktop")};
    margin-bottom: ${ViewportCalculator(50, "desktop")};

    @media ${theme.media.desktop} {
        padding: 75px 0 50px 0;
        gap: 70px;
    }
    @media ${theme.media.laptop} {
        flex-direction: column-reverse;
        align-items: center;
        gap: ${ViewportCalculator(70, "laptop")};
        margin-top: ${ViewportCalculator(75, "laptop")};
        margin-bottom: ${ViewportCalculator(50, "laptop")};
    }
    @media ${theme.media.tablet} {
        gap: ${ViewportCalculator(70, "tablet")};
        margin-top: ${ViewportCalculator(25, "tablet")};
        margin-bottom: ${ViewportCalculator(25, "tablet")};
    }
    @media ${theme.media.largeMobile} {
        gap: ${ViewportCalculator(70, "largeMobile")};
        margin-top: ${ViewportCalculator(25, "largeMobile")};
        margin-bottom: ${ViewportCalculator(25, "largeMobile")};
    }
    @media ${theme.media.mobile} {
        gap: ${ViewportCalculator(70, "mobile")};
        margin-top: ${ViewportCalculator(25, "mobile")};
        margin-bottom: ${ViewportCalculator(25, "mobile")};
    }
`
export const InfoWrapper = styled.div`
    position: relative;
    background: rgba(23, 23, 23, 0.95);
    box-shadow: 0 3px 50px rgba(0, 0, 0, 0.37);
    height: fit-content;
    border-radius: ${ViewportCalculator(25, "desktop")};
    margin-top: -${ViewportCalculator(100, "desktop")};
    padding-top: ${ViewportCalculator(45, "desktop")};
    padding-bottom: ${ViewportCalculator(45, "desktop")};
    padding-left: ${ViewportCalculator(60, "desktop")};
    padding-right: ${ViewportCalculator(60, "desktop")};

    @media ${theme.media.desktop} {
        margin-top: -100px;
    }
    @media ${theme.media.laptop} {
        margin-top: 0;
        border-radius: ${ViewportCalculator(25, "laptop")};
        padding-top: ${ViewportCalculator(45, "laptop")};
        padding-bottom: ${ViewportCalculator(45, "laptop")};
        padding-left: ${ViewportCalculator(60, "laptop")};
        padding-right: ${ViewportCalculator(60, "laptop")};
    }
    @media ${theme.media.tablet} {
        border-radius: 0;
        width: 100%;
    }
    @media ${theme.media.largeMobile} {
        padding-top: ${ViewportCalculator(45, "largeMobile")};
        padding-bottom: ${ViewportCalculator(45, "largeMobile")};
        padding-left: ${ViewportCalculator(60, "largeMobile")};
        padding-right: ${ViewportCalculator(60, "largeMobile")};
    }
    @media ${theme.media.mobile} {
        padding-top: ${ViewportCalculator(45, "mobile")};
        padding-bottom: ${ViewportCalculator(45, "mobile")};
        padding-left: ${ViewportCalculator(60, "mobile")};
        padding-right: ${ViewportCalculator(60, "mobile")};
    }

    > p {
        font-weight: 700;
        opacity: 0.76;
        color: #fff;
        width: ${ViewportCalculator(250, "desktop")};
        font-size: ${ViewportCalculator(25, "desktop")};

        @media ${theme.media.desktop} {
            width: 250px;
            font-size: 25px;
        }
        @media ${theme.media.laptop} {
            width: ${ViewportCalculator(250, "laptop")};
            font-size: ${ViewportCalculator(25, "laptop")};
        }
        @media ${theme.media.tablet} {
            width: 100%;
            font-size: ${ViewportCalculator(25, "tablet")};
        }
        @media ${theme.media.largeMobile} {
            width: 100%;
            font-size: ${ViewportCalculator(25, "largeMobile")};
        }
        @media ${theme.media.mobile} {
            font-size: ${ViewportCalculator(25, "mobile")};
        }
    }
    > p > span {
        color: #9680ff;
        text-decoration: underline;
        cursor: pointer;
    }
    #isWithoutUnerline {
        text-decoration: none;
        cursor: default;
    }
`
export const HandPointer = styled.div`
    background: no-repeat center/contain url(${handPointer});
    opacity: 0.66;
    aspect-ratio: 1/1;
    position: absolute;
    right: 0;
    height: ${ViewportCalculator(100, "desktop")};
    top: -${ViewportCalculator(45, "desktop")};

    @media ${theme.media.desktop} {
        height: 100px;
        top: 45px;
    }
    @media ${theme.media.laptop} {
        height: ${ViewportCalculator(100, "laptop")};
        top: -${ViewportCalculator(45, "laptop")};
    }
    @media ${theme.media.tablet} {
        height: ${ViewportCalculator(100, "tablet")};
        top: -${ViewportCalculator(45, "tablet")};
    }
    @media ${theme.media.largeMobile} {
        height: ${ViewportCalculator(100, "largeMobile")};
        top: -${ViewportCalculator(45, "largeMobile")};
    }
    @media ${theme.media.mobile} {
        height: ${ViewportCalculator(100, "mobile")};
        top: -${ViewportCalculator(45, "mobile")};
    }
`
export const Placing = styled.div`
    position: absolute;
    right: -${ViewportCalculator(30, "desktop")};
    bottom: -${ViewportCalculator(20, "desktop")};

    @media ${theme.media.desktop} {
        right: -30px;
        bottom: -20px;
    }
    @media ${theme.media.laptop} {
        right: -${ViewportCalculator(30, "laptop")};
        bottom: -${ViewportCalculator(20, "laptop")};
    }
    @media ${theme.media.tablet} {
        right: ${ViewportCalculator(15, "laptop")};
        bottom: -${ViewportCalculator(20, "tablet")};
    }
    @media ${theme.media.largeMobile} {
        right: ${ViewportCalculator(15, "largeMobile")};
        bottom: -${ViewportCalculator(20, "largeMobile")};
    }
    @media ${theme.media.mobile} {
        right: ${ViewportCalculator(15, "mobile")};
        bottom: -${ViewportCalculator(20, "mobile")};
    }
`
