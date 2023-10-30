import styled from "styled-components"

import { theme } from "../../../styles/theme"
import ViewportCalculator from "../../../styles/viewportCalculator"

import bodyBackground from "../../../utils/imgs/bodyBg/hero.png"
import bodyBackgroundMedium from "../../../utils/imgs/bodyBg/hero-medium.png"
import bodyBackgroundSmall from "../../../utils/imgs/bodyBg/hero-small.png"

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
        padding: ${ViewportCalculator(15, "tablet")};
        min-height: 560px;
    }
    @media ${theme.media.largeMobile} {
        margin-top: ${ViewportCalculator(25, "largeMobile")};
        margin-bottom: ${ViewportCalculator(75, "largeMobile")};
        padding: ${ViewportCalculator(15, "largeMobile")};
        background: no-repeat left/cover url(${bodyBackgroundSmall}) #8e77ff;
    }
    @media ${theme.media.mobile} {
        margin-top: ${ViewportCalculator(25, "mobile")};
        margin-bottom: ${ViewportCalculator(75, "mobile")};
        padding: ${ViewportCalculator(15, "mobile")};
    }
`
export const HeroContentWrapper = styled.div``
export const Placing = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -20px;

    @media ${theme.media.tablet} {
        bottom: 40px;
    }
`
