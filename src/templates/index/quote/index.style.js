import styled from "styled-components"

import { theme } from "../../../styles/theme"
import ViewportCalculator from "../../../styles/viewportCalculator"

import bodyBackground from "../../../utils/imgs/bodyBg/hero.png"
import bodyBackgroundMedium from "../../../utils/imgs/bodyBg/hero-medium.png"
import bodyBackgroundSmall from "../../../utils/imgs/bodyBg/hero-small.png"
import heroHeaderBg from "../../../utils/imgs/hero-header-bg.png"
import quoteSymbol from "../../../utils/imgs/quote-symbol.png"

export const QuoteTemplateWrapper = styled.div`
    position: relative;
    background: no-repeat left/cover url(${bodyBackground}) #8e77ff;
    margin-top: ${ViewportCalculator(25, "desktop")};
    margin-bottom: ${ViewportCalculator(70, "desktop")};
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
        margin-bottom: ${ViewportCalculator(70, "laptop")};
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
    }
    @media ${theme.media.largeMobile} {
        margin-top: ${ViewportCalculator(25, "largeMobile")};
        margin-bottom: ${ViewportCalculator(50, "largeMobile")};
        background: no-repeat left/cover url(${bodyBackgroundSmall}) #8e77ff;
        justify-content: center;
    }
    @media ${theme.media.mobile} {
        margin-top: ${ViewportCalculator(25, "mobile")};
        margin-bottom: ${ViewportCalculator(50, "mobile")};
    }
`
export const QuoteContentWrapper = styled.div`
    position: relative;
    background: no-repeat center/contain url(${heroHeaderBg});
    width: fit-content;
    height: fit-content;
    position: relative;
    margin-right: ${ViewportCalculator(10, "desktop")};
    margin-top: ${ViewportCalculator(10, "desktop")};
    padding: ${ViewportCalculator(75, "desktop")};
    max-width: ${ViewportCalculator(600, "desktop")};

    @media ${theme.media.desktop} {
        margin-right: 60px;
        margin-top: 45px;
        padding: 50px;
        max-width: 600px;
    }
    @media ${theme.media.laptop} {
        margin-right: ${ViewportCalculator(10, "laptop")};
        margin-top: ${ViewportCalculator(10, "laptop")};
        padding: ${ViewportCalculator(75, "laptop")};
        max-width: ${ViewportCalculator(600, "laptop")};
    }
    @media ${theme.media.tablet} {
        margin-right: ${ViewportCalculator(10, "tablet")};
        margin-top: ${ViewportCalculator(10, "tablet")};
        padding: ${ViewportCalculator(50, "tablet")};
        max-width: ${ViewportCalculator(600, "tablet")};
    }
    @media ${theme.media.largeMobile} {
        margin-right: ${ViewportCalculator(10, "largeMobile")};
        margin-top: ${ViewportCalculator(10, "largeMobile")};
        padding: ${ViewportCalculator(65, "largeMobile")};
        max-width: ${ViewportCalculator(600, "largeMobile")};
    }

    &::before {
        content: "";
        aspect-ratio: 1/1;
        background: no-repeat center/contain url(${quoteSymbol});
        position: absolute;
        left: 0;
        top: 0;
        height: ${ViewportCalculator(55, "desktop")};

        @media ${theme.media.desktop} {
            height: 55px;
        }
        @media ${theme.media.laptop} {
            height: ${ViewportCalculator(55, "laptop")};
        }
        @media ${theme.media.tablet} {
            height: ${ViewportCalculator(55, "tablet")};
        }
        @media ${theme.media.largeMobile} {
            height: ${ViewportCalculator(55, "largeMobile")};
        }
        @media ${theme.media.mobile} {
            height: ${ViewportCalculator(55, "mobile")};
        }
    }
    &::after {
        content: "";
        aspect-ratio: 1/1;
        background: no-repeat center/contain url(${quoteSymbol});
        position: absolute;
        right: 0;
        bottom: 0;
        transform: rotate(180deg);
        height: ${ViewportCalculator(55, "desktop")};

        @media ${theme.media.desktop} {
            height: 55px;
        }
        @media ${theme.media.laptop} {
            height: ${ViewportCalculator(55, "laptop")};
        }
        @media ${theme.media.tablet} {
            height: ${ViewportCalculator(55, "tablet")};
        }
        @media ${theme.media.largeMobile} {
            height: ${ViewportCalculator(55, "largeMobile")};
        }
        @media ${theme.media.mobile} {
            height: ${ViewportCalculator(55, "mobile")};
        }
    }

    > h1 {
        font-style: italic;
        color: #fff;
        font-size: ${ViewportCalculator(47, "desktop")};

        @media ${theme.media.desktop} {
            font-size: 47px;
        }
        @media ${theme.media.laptop} {
            font-size: ${ViewportCalculator(47, "laptop")};
        }
        @media ${theme.media.tablet} {
            font-size: ${ViewportCalculator(47, "tablet")};
        }
        @media ${theme.media.largeMobile} {
            font-size: ${ViewportCalculator(47, "largeMobile")};
        }
        @media ${theme.media.mobile} {
            font-size: ${ViewportCalculator(47, "mobile")};
        }

        > span {
            text-decoration: underline;
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
