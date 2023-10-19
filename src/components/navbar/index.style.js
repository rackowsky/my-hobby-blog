import { Link } from "gatsby"
import styled from "styled-components"

import { theme } from "../../styles/theme"
import ViewportCalculator from "../../styles/viewportCalculator"

import emojiSmile from "../../utils/imgs/emoji-smile.png"
import logo from "../../utils/imgs/logo.png"

export const NavbarWrapper = styled.div``
export const AlertWrapper = styled.div`
    background: #d5d0ee;
    min-height: 43px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 5px 10px;

    > p {
        font-size: ${ViewportCalculator(16, "desktop")};
        font-weight: 600;

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
`
export const NavWrapper = styled.div`
    background: #1a1a1a;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #fff1;
    padding: 0 ${ViewportCalculator(150, "desktop")};

    @media ${theme.media.desktop} {
        padding: 0 150px;
    }
    @media ${theme.media.laptop} {
        padding: 0 ${ViewportCalculator(100, "laptop")};
    }
    @media ${theme.media.tablet} {
        padding: 0 ${ViewportCalculator(50, "tablet")};
    }
    @media ${theme.media.largeMobile} {
        padding: 0 ${ViewportCalculator(25, "largeMobile")};
    }
    @media ${theme.media.mobile} {
        padding: 0 ${ViewportCalculator(10, "mobile")};
    }
`
export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;

    > p {
        color: #ffffff;
        font-size: 24px;
        font-weight: 600;
    }
`
export const Logo = styled.div`
    height: 60px;
    aspect-ratio: 1/1;
    background: no-repeat center/contain url(${logo});
`
export const Nav = styled.div`
    display: flex;
    gap: 30px;
`
export const NavButton = styled(Link)`
    background: #9680ff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding: 7px 18px;
    gap: 10px;
    text-decoration: none;
    color: #131313;
    font-weight: 600;
`
export const NavIcon = styled.div`
    height: 14px;
    aspect-ratio: 1/1;
    background: no-repeat center/contain url(${(props) => props.icon});
`
export const ThemeSwitcher = styled.div`
    background: #9680ff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding: 7px 18px;
    gap: 10px;
    text-decoration: none;
    color: #131313;
    font-weight: 600;
`
