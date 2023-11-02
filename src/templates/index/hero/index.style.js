import styled from "styled-components"

import { theme } from "../../../styles/theme"
import ViewportCalculator from "../../../styles/viewportCalculator"

import bodyBackground from "../../../utils/imgs/bodyBg/hero.png"
import bodyBackgroundMedium from "../../../utils/imgs/bodyBg/hero-medium.png"
import bodyBackgroundSmall from "../../../utils/imgs/bodyBg/hero-small.png"
import heroHeaderBg from "../../../utils/imgs/hero-header-bg.png"

export const HeroTemplateWrapper = styled.div`
    position: relative;
    background: no-repeat left/cover url(${bodyBackground}) #8e77ff;
    margin-top: ${ViewportCalculator(25, "desktop")};
    margin-bottom: ${ViewportCalculator(75, "desktop")};
    margin-left: ${ViewportCalculator(100, "desktop")};
    margin-right: ${ViewportCalculator(100, "desktop")};
    padding: ${ViewportCalculator(15, "desktop")};
    border-radius: ${ViewportCalculator(45, "desktop")};
    box-shadow: 0px 3px 85px ${(props) => props.theme.bodyShadowColor};
    min-height: 780px;
    display: flex;
    justify-content: right;
    align-items: top;

    @media ${theme.media.desktop} {
        margin: 25px 100px 75px 100px;
        border-radius: 45px;
        padding: 15px;
    }
    @media ${theme.media.laptop} {
        margin-top: ${ViewportCalculator(25, "laptop")};
        margin-bottom: ${ViewportCalculator(75, "laptop")};
        margin-left: ${ViewportCalculator(50, "laptop")};
        margin-right: ${ViewportCalculator(50, "laptop")};
        border-radius: ${ViewportCalculator(45, "laptop")};
        padding: ${ViewportCalculator(15, "laptop")};
        background: no-repeat left/cover url(${bodyBackgroundMedium}) #8e77ff;
    }
    @media ${theme.media.tablet} {
        margin-top: ${ViewportCalculator(25, "tablet")};
        margin-bottom: ${ViewportCalculator(75, "tablet")};
        margin-left: 0;
        margin-right: 0;
        border-radius: 0;
        padding: ${ViewportCalculator(0, "tablet")};
        min-height: 650px;
        justify-content: center;
    }
    @media ${theme.media.largeMobile} {
        margin-top: ${ViewportCalculator(25, "largeMobile")};
        margin-bottom: ${ViewportCalculator(75, "largeMobile")};
        background: no-repeat left/cover url(${bodyBackgroundSmall}) #8e77ff;
    }
    @media ${theme.media.mobile} {
        margin-top: ${ViewportCalculator(25, "mobile")};
        margin-bottom: ${ViewportCalculator(75, "mobile")};
    }
`
export const HeroContentWrapper = styled.div`
    background: no-repeat center/contain url(${heroHeaderBg});
    width: fit-content;
    height: fit-content;
    position: relative;
    margin-right: ${ViewportCalculator(105, "desktop")};
    margin-top: ${ViewportCalculator(65, "desktop")};
    padding: ${ViewportCalculator(75, "desktop")};

    @media ${theme.media.desktop} {
        margin-right: 60px;
        margin-top: 45px;
        padding: 55px;
    }
    @media ${theme.media.laptop} {
        margin-right: ${ViewportCalculator(105, "laptop")};
        margin-top: ${ViewportCalculator(65, "laptop")};
        padding: ${ViewportCalculator(75, "laptop")};
    }
    @media ${theme.media.tablet} {
        margin-right: ${ViewportCalculator(0, "tablet")};
        margin-top: ${ViewportCalculator(0, "tablet")};
        padding: ${ViewportCalculator(75, "tablet")};
    }

    > h1 {
        font-weight: 700;
        color: #fff;
        font-size: ${ViewportCalculator(87, "desktop")};

        @media ${theme.media.desktop} {
            font-size: 65px;
        }
        @media ${theme.media.laptop} {
            font-size: ${ViewportCalculator(87, "laptop")};
        }
        @media ${theme.media.tablet} {
            font-size: ${ViewportCalculator(70, "tablet")};
        }
        @media ${theme.media.largeMobile} {
            font-size: ${ViewportCalculator(50, "largeMobile")};
        }
        @media ${theme.media.mobile} {
            font-size: ${ViewportCalculator(40, "mobile")};
        }
    }
    > p {
        font-weight: 700;
        color: #fff;
        margin-top: ${ViewportCalculator(5, "desktop")};
        font-size: ${ViewportCalculator(22, "desktop")};

        @media ${theme.media.desktop} {
            font-size: 17px;
        }
        @media ${theme.media.laptop} {
            margin-top: ${ViewportCalculator(5, "laptop")};
            font-size: ${ViewportCalculator(22, "laptop")};
        }
        @media ${theme.media.tablet} {
            margin-top: ${ViewportCalculator(5, "tablet")};
            font-size: ${ViewportCalculator(20, "tablet")};
        }
        @media ${theme.media.largeMobile} {
            margin-top: ${ViewportCalculator(5, "largeMobile")};
            font-size: ${ViewportCalculator(15, "largeMobile")};
        }
        @media ${theme.media.mobile} {
            margin-top: ${ViewportCalculator(5, "mobile")};
            font-size: ${ViewportCalculator(15, "mobile")};
        }

        > span {
            text-decoration: underline;
            background: #8268ff;
            padding: 4px;
            border-radius: 6px;
        }
    }
`
export const Placing = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -20px;

    @media ${theme.media.tablet} {
        bottom: 30px;
    }
`
