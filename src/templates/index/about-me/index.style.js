import styled from "styled-components"

import { theme } from "../../../styles/theme"
import ViewportCalculator from "../../../styles/viewportCalculator"

import bodyBackground from "../../../utils/imgs/bodyBg/about-me.png"
import SmileEmoji from "../../../utils/imgs/aboutMe/emoji-smile.png"

export const AboutMeTemplateWrapper = styled.div`
    position: relative;
    background: no-repeat center/cover url(${bodyBackground}) #8e77ff;
    margin-top: ${ViewportCalculator(25, "desktop")};
    margin-bottom: ${ViewportCalculator(50, "desktop")};
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
        margin-bottom: ${ViewportCalculator(25, "laptop")};
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
        padding: 10px 0;
    }
    @media ${theme.media.largeMobile} {
        margin-top: ${ViewportCalculator(25, "largeMobile")};
        margin-bottom: ${ViewportCalculator(25, "largeMobile")};
    }
    @media ${theme.media.mobile} {
        margin-top: ${ViewportCalculator(25, "mobile")};
        margin-bottom: ${ViewportCalculator(25, "mobile")};
    }
`
export const ContentWrapper = styled.div`
    padding-top: ${ViewportCalculator(40, "desktop")};
    padding-bottom: ${ViewportCalculator(100, "desktop")};

    @media ${theme.media.desktop} {
        padding: 40px 0 100px 0;
    }
    @media ${theme.media.laptop} {
        padding-top: ${ViewportCalculator(40, "laptop")};
        padding-bottom: ${ViewportCalculator(100, "laptop")};
    }
    @media ${theme.media.tablet} {
        padding-top: ${ViewportCalculator(40, "tablet")};
        padding-bottom: ${ViewportCalculator(100, "tablet")};
        padding: 0;
    }
    @media ${theme.media.largeMobile} {
        padding-top: ${ViewportCalculator(40, "largeMobile")};
        padding-bottom: ${ViewportCalculator(100, "largeMobile")};
    }
    @media ${theme.media.mobile} {
        padding-top: ${ViewportCalculator(40, "mobile")};
        padding-bottom: ${ViewportCalculator(100, "mobile")};
    }
`
export const P = styled.p`
    position: relative;
    background: ${(props) =>
        props.isSecondParagraph
            ? "#9680FF"
            : props.theme.aboutMeBackgroundColor};
    color: ${(props) =>
        props.isSecondParagraph ? "#FFFFFF" : props.theme.aboutMeTextColor};
    border-radius: ${(props) => (props.isSecondParagraph ? "18px" : "27px")};
    font-size: ${ViewportCalculator(20, "desktop")};
    font-weight: 700;
    margin-top: ${(props) => (props.isSecondParagraph ? "-45px" : "0")};
    margin-bottom: 0;
    margin-left: ${(props) =>
        props.isSecondParagraph
            ? ViewportCalculator(700, "desktop")
            : ViewportCalculator(200, "desktop")};
    margin-right: ${(props) =>
        props.isSecondParagraph
            ? ViewportCalculator(125, "desktop")
            : ViewportCalculator(200, "desktop")};
    padding-top: ${(props) =>
        props.isSecondParagraph
            ? ViewportCalculator(35, "desktop")
            : ViewportCalculator(45, "desktop")};
    padding-bottom: ${(props) =>
        props.isSecondParagraph
            ? ViewportCalculator(35, "desktop")
            : ViewportCalculator(75, "desktop")};
    padding-left: ${(props) =>
        props.isSecondParagraph
            ? ViewportCalculator(35, "desktop")
            : ViewportCalculator(60, "desktop")};
    padding-right: ${(props) =>
        props.isSecondParagraph
            ? ViewportCalculator(20, "desktop")
            : ViewportCalculator(250, "desktop")};
    box-shadow: ${(props) =>
        props.isSecondParagraph
            ? "0 3px 50px rgba(19, 19, 19, 0.24)"
            : "0 3px 50px rgba(19, 19, 19, 0.45)"};

    @media ${theme.media.desktop} {
        margin: ${(props) =>
            props.isSecondParagraph
                ? "-45px 125px 0 700px"
                : "0 200px 0 200px"};
        padding: ${(props) =>
            props.isSecondParagraph
                ? "35px 20px 35px 35px"
                : "45px 250px 75px 60px"};
        font-size: 20px;
    }
    @media ${theme.media.laptop} {
        margin-left: ${(props) =>
            props.isSecondParagraph
                ? ViewportCalculator(700, "laptop")
                : ViewportCalculator(200, "laptop")};
        margin-right: ${(props) =>
            props.isSecondParagraph
                ? ViewportCalculator(125, "laptop")
                : ViewportCalculator(200, "laptop")};
        padding-top: ${(props) =>
            props.isSecondParagraph
                ? ViewportCalculator(35, "laptop")
                : ViewportCalculator(45, "laptop")};
        padding-bottom: ${(props) =>
            props.isSecondParagraph
                ? ViewportCalculator(35, "laptop")
                : ViewportCalculator(75, "laptop")};
        padding-left: ${(props) =>
            props.isSecondParagraph
                ? ViewportCalculator(35, "laptop")
                : ViewportCalculator(60, "laptop")};
        padding-right: ${(props) =>
            props.isSecondParagraph
                ? ViewportCalculator(20, "laptop")
                : ViewportCalculator(250, "laptop")};
    }
    @media ${theme.media.tablet} {
        border-radius: 0;
        margin: 20px 0;
        padding: 10px;
        font-size: ${ViewportCalculator(20, "desktop")};
    }
    @media ${theme.media.largeMobile} {
        margin-left: ${(props) =>
            props.isSecondParagraph
                ? ViewportCalculator(700, "largeMobile")
                : ViewportCalculator(200, "largeMobile")};
        margin-right: ${(props) =>
            props.isSecondParagraph
                ? ViewportCalculator(125, "largeMobile")
                : ViewportCalculator(200, "largeMobile")};
        padding-top: ${(props) =>
            props.isSecondParagraph
                ? ViewportCalculator(35, "largeMobile")
                : ViewportCalculator(45, "largeMobile")};
        padding-bottom: ${(props) =>
            props.isSecondParagraph
                ? ViewportCalculator(35, "largeMobile")
                : ViewportCalculator(75, "largeMobile")};
        padding-left: ${(props) =>
            props.isSecondParagraph
                ? ViewportCalculator(35, "largeMobile")
                : ViewportCalculator(60, "largeMobile")};
        padding-right: ${(props) =>
            props.isSecondParagraph
                ? ViewportCalculator(20, "largeMobile")
                : ViewportCalculator(250, "largeMobile")};
        font-size: ${ViewportCalculator(20, "desktop")};
    }
    @media ${theme.media.mobile} {
        margin-left: ${(props) =>
            props.isSecondParagraph
                ? ViewportCalculator(700, "mobile")
                : ViewportCalculator(200, "mobile")};
        margin-right: ${(props) =>
            props.isSecondParagraph
                ? ViewportCalculator(125, "mobile")
                : ViewportCalculator(200, "mobile")};
        padding-top: ${(props) =>
            props.isSecondParagraph
                ? ViewportCalculator(35, "mobile")
                : ViewportCalculator(45, "mobile")};
        padding-bottom: ${(props) =>
            props.isSecondParagraph
                ? ViewportCalculator(35, "mobile")
                : ViewportCalculator(75, "mobile")};
        padding-left: ${(props) =>
            props.isSecondParagraph
                ? ViewportCalculator(35, "mobile")
                : ViewportCalculator(60, "mobile")};
        padding-right: ${(props) =>
            props.isSecondParagraph
                ? ViewportCalculator(20, "mobile")
                : ViewportCalculator(250, "mobile")};
        font-size: ${ViewportCalculator(20, "desktop")};
    }

    &::after {
        display: ${(props) => (props.isSecondParagraph ? "none" : "block")};
        content: "";
        height: 335px;
        aspect-ratio: 1/1;
        background: no-repeat center/100% url(${SmileEmoji});
        position: absolute;
        right: -75px;
        top: -25px;
        filter: grayscale(${(props) => props.theme.invertColorMenu});

        @media ${theme.media.tablet} {
            display: none;
        }
    }
`
