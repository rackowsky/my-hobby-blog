import styled from "styled-components"
import { theme } from "../../styles/theme"
import ViewportCalculator from "../../styles/viewportCalculator"

import headerSectionDecoImg from "../../utils/imgs/header-section-deco.png"

export const HeaderSectionWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`
export const HeaderSectionHeader = styled.div`
    width: fit-content;
    padding: 5px 40px 5px 10px;
    margin: 30px;
    background-image: linear-gradient(
        to right,
        #cec4ff 50%,
        rgba(255, 255, 255, 0) 50%
    );
    background-position: top;
    background-size: 50px 2px;
    background-repeat: repeat-x;
    border-image: linear-gradient(
        to right,
        #cec4ff 50%,
        rgba(255, 255, 255, 0) 50%
    );
    border-width: 2px;

    @media ${theme.media.tablet} {
        margin: 10px;
    }

    > h1 {
        color: #cec4ff;
        font-size: ${ViewportCalculator(50, "desktop")};

        @media ${theme.media.desktop} {
            font-size: 50px;
        }
        @media ${theme.media.laptop} {
            font-size: ${ViewportCalculator(50, "laptop")};
        }
        @media ${theme.media.tablet} {
            font-size: ${ViewportCalculator(42, "tablet")};
        }
        @media ${theme.media.largeMobile} {
            font-size: ${ViewportCalculator(42, "largeMobile")};
        }
        @media ${theme.media.mobile} {
            font-size: ${ViewportCalculator(35, "mobile")};
        }
    }
    > p {
        color: #cec4ff;
        font-size: ${ViewportCalculator(18, "desktop")};
        margin-left: ${ViewportCalculator(20, "desktop")};

        @media ${theme.media.desktop} {
            font-size: 18px;
            margin-left: 20px;
        }
        @media ${theme.media.laptop} {
            font-size: ${ViewportCalculator(18, "laptop")};
            margin-left: ${ViewportCalculator(20, "laptop")};
        }
        @media ${theme.media.tablet} {
            font-size: ${ViewportCalculator(17, "tablet")};
            margin-left: ${ViewportCalculator(20, "tablet")};
        }
        @media ${theme.media.largeMobile} {
            font-size: ${ViewportCalculator(15, "largeMobile")};
            margin-left: ${ViewportCalculator(20, "largeMobile")};
        }
        @media ${theme.media.mobile} {
            font-size: ${ViewportCalculator(12, "mobile")};
            margin-left: ${ViewportCalculator(20, "mobile")};
        }
    }
`
export const HeaderSectionDeco = styled.div`
    background: no-repeat center/contain url(${headerSectionDecoImg});
    height: ${ViewportCalculator(120, "desktop")};
    width: ${ViewportCalculator(200, "desktop")};
    margin-right: ${ViewportCalculator(50, "desktop")};

    @media ${theme.media.desktop} {
        height: 120px;
        width: 200px;
        margin-right: 50px;
    }
    @media ${theme.media.laptop} {
        height: ${ViewportCalculator(120, "laptop")};
        width: ${ViewportCalculator(200, "laptop")};
        margin-right: ${ViewportCalculator(50, "laptop")};
    }
    @media ${theme.media.tablet} {
        height: ${ViewportCalculator(100, "tablet")};
        width: ${ViewportCalculator(180, "tablet")};
        margin-right: ${ViewportCalculator(30, "tablet")};
    }
    @media ${theme.media.largeMobile} {
        height: ${ViewportCalculator(100, "largeMobile")};
        width: ${ViewportCalculator(180, "largeMobile")};
        margin-right: ${ViewportCalculator(20, "largeMobile")};
    }
    @media ${theme.media.mobile} {
        height: ${ViewportCalculator(100, "mobile")};
        width: ${ViewportCalculator(180, "mobile")};
        margin-right: ${ViewportCalculator(10, "mobile")};
    }
`
