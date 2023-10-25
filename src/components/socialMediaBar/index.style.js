import styled from "styled-components"

import { theme } from "../../styles/theme"
import ViewportCalculator from "../../styles/viewportCalculator"

export const SocialMediaBarWrapper = styled.div`
    z-index: 50;
    background: ${(props) =>
        props.isFooter
            ? props.theme.socialMediaBarBackgroundFooter
            : props.theme.socialMediaBarBackgroundComponent};
    box-shadow: 0px 3px 50px rgba(19, 19, 19, 0.3);
    display: flex;
    justify-content: space-around;
    border-radius: ${ViewportCalculator(10, "desktop")};
    gap: ${ViewportCalculator(45, "desktop")};
    padding-left: ${ViewportCalculator(27, "desktop")};
    padding-right: ${ViewportCalculator(27, "desktop")};
    padding-top: ${ViewportCalculator(12, "desktop")};
    padding-bottom: ${ViewportCalculator(12, "desktop")};
    width: ${ViewportCalculator(200, "desktop")};

    @media ${theme.media.desktop} {
        border-radius: 10px;
        gap: 45px;
        padding: 12px 27px;
        width: 200px;
    }
    @media ${theme.media.laptop} {
        border-radius: ${ViewportCalculator(10, "laptop")};
        gap: ${ViewportCalculator(45, "laptop")};
        padding-left: ${ViewportCalculator(27, "laptop")};
        padding-right: ${ViewportCalculator(27, "laptop")};
        padding-top: ${ViewportCalculator(12, "laptop")};
        padding-bottom: ${ViewportCalculator(12, "laptop")};
        width: ${ViewportCalculator(200, "laptop")};
    }
    @media ${theme.media.tablet} {
        border-radius: ${ViewportCalculator(10, "tablet")};
        gap: ${ViewportCalculator(45, "tablet")};
        padding-left: ${ViewportCalculator(27, "tablet")};
        padding-right: ${ViewportCalculator(27, "tablet")};
        padding-top: ${ViewportCalculator(12, "tablet")};
        padding-bottom: ${ViewportCalculator(12, "tablet")};
        width: ${ViewportCalculator(200, "tablet")};
    }
    @media ${theme.media.largeMobile} {
        border-radius: ${ViewportCalculator(10, "largeMobile")};
        gap: ${ViewportCalculator(45, "largeMobile")};
        padding-left: ${ViewportCalculator(27, "largeMobile")};
        padding-right: ${ViewportCalculator(27, "largeMobile")};
        padding-top: ${ViewportCalculator(12, "largeMobile")};
        padding-bottom: ${ViewportCalculator(12, "largeMobile")};
        width: ${ViewportCalculator(200, "largeMobile")};
    }
    @media ${theme.media.mobile} {
        border-radius: ${ViewportCalculator(10, "mobile")};
        gap: ${ViewportCalculator(45, "mobile")};
        padding-left: ${ViewportCalculator(27, "mobile")};
        padding-right: ${ViewportCalculator(27, "mobile")};
        padding-top: ${ViewportCalculator(12, "mobile")};
        padding-bottom: ${ViewportCalculator(12, "mobile")};
        width: ${ViewportCalculator(200, "mobile")};
    }
`
export const Icon = styled.a`
    height: 19px;
    aspect-ratio: 1/1;
    background: no-repeat center/cover url(${(props) => props.iconBackground});
`
