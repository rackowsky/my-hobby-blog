import { Link } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"

import { theme } from "../../styles/theme"
import ViewportCalculator from "../../styles/viewportCalculator"

import emojiSmile from "../../utils/imgs/emoji-smile.png"
import logo from "../../utils/imgs/logo.png"

import menu from "../../utils/svgs/menu/menu.svg"
import menu_close from "../../utils/svgs/menu/menu-close.svg"
import mobile_menu_background from "../../utils/svgs/menu/mobile-menu-background.svg"

export const GlobalNavbarStyle = createGlobalStyle`
    body {
        overflow: ${({ setShowMenu }) => (setShowMenu ? "hidden" : "visible")};
    }
`
export const NavbarWrapper = styled.div`
    position: fixed;
    width: 100%;
    z-index: 5000;
    max-width: 1920px;
`
export const AlertWrapper = styled.div`
    background: ${(props) => props.theme.infoBackground};
    min-height: 43px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 5px 10px;

    > p {
        font-size: ${ViewportCalculator(16, "desktop")};
        font-weight: 600;
        color: ${(props) => props.theme.text};

        @media ${theme.media.desktop} {
            font-size: 16px;
        }
        @media ${theme.media.laptop} {
            font-size: ${ViewportCalculator(16, "laptop")};
        }
        @media ${theme.media.tablet} {
            font-size: ${ViewportCalculator(16, "tablet")};
        }
        @media ${theme.media.largeMobile} {
            font-size: ${ViewportCalculator(16, "largeMobile")};
        }
        @media ${theme.media.mobile} {
            font-size: ${ViewportCalculator(16, "mobile")};
        }
    }
`
export const Emoji = styled.div`
    height: 20px;
    aspect-ratio: 1/1;
    background: no-repeat center/cover url(${emojiSmile});
    filter: ${({ darkMode }) => (darkMode ? "invert(0)" : "invert(1)")};
`
export const NavWrapper = styled.div`
    background: ${(props) => props.theme.bodyBackground};
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
    padding: 0 ${ViewportCalculator(75, "desktop")};
    overflow: hidden;

    @media ${theme.media.desktop} {
        padding: 0 100px;
    }
    @media ${theme.media.laptop} {
        padding: 0 ${ViewportCalculator(25, "laptop")};
    }
    @media ${theme.media.tablet} {
        padding: 0 ${ViewportCalculator(50, "tablet")};
        height: 75px;
    }
    @media ${theme.media.largeMobile} {
        padding: 0 ${ViewportCalculator(25, "largeMobile")};
    }
    @media ${theme.media.mobile} {
        padding: 0 ${ViewportCalculator(10, "mobile")};
    }
`
export const LogoWrapper = styled(Link)`
    display: flex;
    align-items: center;
    gap: 15px;
    text-decoration: none;
    margin-right: 15px;

    > p {
        color: ${(props) => props.theme.logoTextColor};
        font-size: 24px;
        font-weight: 600;
    }

    @media ${theme.media.mobile} {
        margin-right: 0;
    }
`
export const Logo = styled.div`
    height: 60px;
    aspect-ratio: 1/1;
    background: no-repeat center/contain url(${logo});
`
export const Nav = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: right;
    gap: ${ViewportCalculator(25, "desktop")};

    @media ${theme.media.desktop} {
        gap: 30px;
    }
    @media ${theme.media.laptop} {
        gap: 5px ${ViewportCalculator(10, "laptop")};
    }
    @media ${theme.media.tablet} {
        display: none;
    }
`
export const NavButton = styled.div`
    font-weight: 600;
    background: ${(props) => props.theme.navBackground};
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding: 7px 18px;
    gap: 10px;
    text-decoration: none;
    color: ${(props) => props.theme.navTextColor};

    @media ${theme.media.tablet} {
        font-size: 20px;
    }
`
export const NavIcon = styled.div`
    height: 14px;
    aspect-ratio: 1/1;
    background: no-repeat center/contain url(${(props) => props.icon});
    filter: ${({ darkMode }) => (darkMode ? "invert(0)" : "invert(1)")};
`
export const ThemeSwitcher = styled.div`
    font-weight: 600;
    background: ${(props) => props.theme.navBackground};
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding: 7px 18px;
    gap: 10px;
    text-decoration: none;
    color: ${(props) => props.theme.navTextColor};
    cursor: pointer;

    @media ${theme.media.tablet} {
        font-size: 20px;
    }
`
export const MobileBtn = styled.div`
    height: 50px;
    aspect-ratio: 1/1;
    filter: invert(${(props) => props.theme.invertColorMenu});
    background: no-repeat center/75%
        url(${(props) => (props.setShowMenu ? menu_close : menu)});
    transition: all 0.2s;
    display: none;

    @media ${theme.media.tablet} {
        display: block;
    }
`
export const MobileNav = styled.div`
    display: ${(props) => (props.setShowMenu ? "flex" : "none")};
    height: 50px;
    aspect-ratio: 1/1;
    background: no-repeat bottom/100% ${(props) => props.theme.bodyBackground};
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    z-index: -1;

    @media (min-width: 768px) {
        display: none;
    }
`
export const Break = styled.div`
    height: 143px;

    @media ${theme.media.tablet} {
        height: 118px;
    }
`
export const MobileMenuLayout = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-top: 55px;
`
export const DrawingHills = styled.div`
    background: no-repeat top/cover url(${mobile_menu_background});
    height: 200px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
`
export const SocialMediaBarWrapper = styled.div`
    background: ${(props) => props.theme.socialMediaBarBackground};
    box-shadow: 0px 3px 50px rgba(19, 19, 19, 0.3);
    display: flex;
    border-radius: 10px;
    gap: 45px;
    padding: 12px 27px;
`
export const Icon = styled.a`
    height: 19px;
    aspect-ratio: 1/1;
    background: no-repeat center/cover url(${(props) => props.iconBackground});
`
