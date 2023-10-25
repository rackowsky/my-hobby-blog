import styled from "styled-components"

import { theme } from "../../styles/theme"
import ViewportCalculator from "../../styles/viewportCalculator"

import logo from "../../utils/imgs/logo.png"
import footer_background from "../../utils/imgs/footer/footer-bg.png"

export const FooterWrapper = styled.div``
export const StripWrapper = styled.div`
    min-height: ${ViewportCalculator(87, "desktop")};
    background: #9680ff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 ${ViewportCalculator(75, "desktop")};
    font-size: ${ViewportCalculator(17, "desktop")};
    font-weight: 700;
    color: #fff;

    > div {
        display: flex;
        gap: 50px;

        @media ${theme.media.laptop} {
            gap: 25px;
        }
        @media ${theme.media.tablet} {
            gap: 15px;
        }
    }

    @media ${theme.media.desktop} {
        padding: 0 100px;
        font-size: 17px;
        min-height: 87px;
    }
    @media ${theme.media.laptop} {
        padding: 0 ${ViewportCalculator(25, "laptop")};
        font-size: ${ViewportCalculator(17, "laptop")};
        min-height: ${ViewportCalculator(87, "laptop")};
    }
    @media ${theme.media.tablet} {
        padding: 10px ${ViewportCalculator(50, "tablet")};
        font-size: ${ViewportCalculator(17, "tablet")};
        flex-direction: column;
    }
    @media ${theme.media.largeMobile} {
        padding: 10px ${ViewportCalculator(25, "largeMobile")};
        font-size: ${ViewportCalculator(17, "largeMobile")};
    }
    @media ${theme.media.mobile} {
        padding: 10px ${ViewportCalculator(10, "mobile")};
        font-size: ${ViewportCalculator(17, "mobile")};
    }
`
export const FooterBodyWrapper = styled.div`
    background: ${(props) => props.theme.footerBackground};
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: ${ViewportCalculator(20, "desktop")};
    padding-right: ${ViewportCalculator(20, "desktop")};
    padding-top: ${ViewportCalculator(50, "desktop")};
    padding-bottom: ${ViewportCalculator(50, "desktop")};
    gap: ${ViewportCalculator(100, "desktop")};

    @media ${theme.media.desktop} {
        padding: 50px 20px;
        gap: 100px;
    }
    @media ${theme.media.laptop} {
        padding-left: ${ViewportCalculator(20, "laptop")};
        padding-right: ${ViewportCalculator(20, "laptop")};
        padding-top: ${ViewportCalculator(50, "laptop")};
        padding-bottom: ${ViewportCalculator(50, "laptop")};
        gap: 0 ${ViewportCalculator(100, "laptop")};
    }
    @media ${theme.media.tablet} {
        padding-left: ${ViewportCalculator(10, "tablet")};
        padding-right: ${ViewportCalculator(10, "tablet")};
        padding-top: ${ViewportCalculator(15, "tablet")};
        padding-bottom: ${ViewportCalculator(125, "tablet")};
        gap: 0;
        flex-direction: column;
        background-image: url(${footer_background});
        background-repeat: no-repeat;
        background-position-x: calc(100% - 25px);
        background-position-y: calc(100% - 25px);
        background-size: 50%;
        background-color: ${(props) => props.theme.footerBackground};
    }
    @media ${theme.media.largeMobile} {
        padding-left: ${ViewportCalculator(10, "largeMobile")};
        padding-right: ${ViewportCalculator(10, "largeMobile")};
        padding-top: ${ViewportCalculator(15, "largeMobile")};
        padding-bottom: ${ViewportCalculator(50, "largeMobile")};
        gap: 0;
    }
    @media ${theme.media.mobile} {
        padding-left: ${ViewportCalculator(10, "mobile")};
        padding-right: ${ViewportCalculator(10, "mobile")};
        padding-top: ${ViewportCalculator(15, "mobile")};
        padding-bottom: ${ViewportCalculator(50, "mobile")};
        gap: 0;
    }
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: ${ViewportCalculator(400, "desktop")};

    @media ${theme.media.desktop} {
        height: 400px;
    }
    @media ${theme.media.laptop} {
        height: ${ViewportCalculator(400, "laptop")};
    }
    @media ${theme.media.tablet} {
        height: ${ViewportCalculator(375, "tablet")};
        justify-content: space-between;
    }
    @media ${theme.media.largeMobile} {
        height: ${ViewportCalculator(375, "largeMobile")};
    }
    @media ${theme.media.mobile} {
        height: ${ViewportCalculator(375, "mobile")};
    }

    > div > p {
        font-weight: 700;
        color: ${(props) => props.theme.footerText};
        margin-top: 15px;
        width: ${ViewportCalculator(500, "desktop")};
        font-size: ${ViewportCalculator(15, "desktop")};
        z-index: 50;

        @media ${theme.media.desktop} {
            width: 500px;
            font-size: 15px;
        }
        @media ${theme.media.laptop} {
            width: ${ViewportCalculator(500, "laptop")};
            font-size: ${ViewportCalculator(15, "laptop")};
        }
        @media ${theme.media.tablet} {
            width: 100%;
            font-size: ${ViewportCalculator(15, "tablet")};
        }
        @media ${theme.media.largeMobile} {
            font-size: ${ViewportCalculator(15, "largeMobile")};
        }
        @media ${theme.media.mobile} {
            font-size: ${ViewportCalculator(15, "mobile")};
        }
    }
`
export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    > div {
        height: ${ViewportCalculator(70, "desktop")};
        width: ${ViewportCalculator(90, "desktop")};
        background: no-repeat center/contain url(${logo});
        z-index: 50;

        @media ${theme.media.desktop} {
            height: 70px;
            width: 90px;
        }
        @media ${theme.media.laptop} {
            height: ${ViewportCalculator(70, "laptop")};
            width: ${ViewportCalculator(90, "laptop")};
        }
        @media ${theme.media.tablet} {
            height: ${ViewportCalculator(70, "tablet")};
            width: ${ViewportCalculator(90, "tablet")};
        }
        @media ${theme.media.largeMobile} {
            height: ${ViewportCalculator(70, "largeMobile")};
            width: ${ViewportCalculator(90, "largeMobile")};
        }
        @media ${theme.media.mobile} {
            height: ${ViewportCalculator(70, "mobile")};
            width: ${ViewportCalculator(90, "mobile")};
        }
    }
    > h4 {
        font-weight: 700;
        color: ${(props) => props.theme.footerText};
        font-size: ${ViewportCalculator(62, "desktop")};
        z-index: 50;

        @media ${theme.media.desktop} {
            font-size: 62px;
        }
        @media ${theme.media.laptop} {
            font-size: ${ViewportCalculator(62, "laptop")};
        }
        @media ${theme.media.tablet} {
            font-size: ${ViewportCalculator(62, "tablet")};
        }
        @media ${theme.media.largeMobile} {
            font-size: ${ViewportCalculator(40, "largeMobile")};
        }
        @media ${theme.media.mobile} {
            font-size: ${ViewportCalculator(30, "mobile")};
        }
    }
`
export const BackgroundDecor = styled.div`
    background: no-repeat center/contain url(${footer_background});
    height: ${ViewportCalculator(300, "desktop")};
    width: ${ViewportCalculator(400, "desktop")};

    @media ${theme.media.desktop} {
        height: 300px;
        width: 400px;
    }
    @media ${theme.media.laptop} {
        height: ${ViewportCalculator(300, "laptop")};
        width: ${ViewportCalculator(400, "laptop")};
    }
    @media ${theme.media.tablet} {
        display: none;
    }
`
