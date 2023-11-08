import styled from "styled-components"
import { theme } from "../../styles/theme"
import ViewportCalculator from "../../styles/viewportCalculator"

export const HeaderSectionWrapper = styled.div`
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
        margin: 20px;
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
            font-size: ${ViewportCalculator(50, "tablet")};
        }
        @media ${theme.media.largeMobile} {
            font-size: ${ViewportCalculator(50, "largeMobile")};
        }
        @media ${theme.media.mobile} {
            font-size: ${ViewportCalculator(50, "mobile")};
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
            font-size: ${ViewportCalculator(18, "tablet")};
            margin-left: ${ViewportCalculator(20, "tablet")};
        }
        @media ${theme.media.largeMobile} {
            font-size: ${ViewportCalculator(18, "largeMobile")};
            margin-left: ${ViewportCalculator(20, "largeMobile")};
        }
        @media ${theme.media.mobile} {
            font-size: ${ViewportCalculator(18, "mobile")};
            margin-left: ${ViewportCalculator(20, "mobile")};
        }
    }
`
