import styled from "styled-components"

import { theme } from "../../../styles/theme"
import ViewportCalculator from "../../../styles/viewportCalculator"

import bodyBackground from "../../../utils/imgs/bodyBg/my-blog.png"

export const MyBlogTemplateWrapper = styled.div`
    background: no-repeat center/cover url(${bodyBackground}) #8e77ff;
    margin-top: ${ViewportCalculator(25, "desktop")};
    margin-bottom: ${ViewportCalculator(25, "desktop")};
    margin-left: ${ViewportCalculator(100, "desktop")};
    margin-right: ${ViewportCalculator(100, "desktop")};
    padding: ${ViewportCalculator(15, "desktop")};
    border-radius: ${ViewportCalculator(45, "desktop")};
    box-shadow: 0px 3px 85px ${(props) => props.theme.bodyShadowColor};

    @media ${theme.media.desktop} {
        margin: 25px 100px;
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
        padding: ${ViewportCalculator(15, "tablet")};
    }
    @media ${theme.media.largeMobile} {
        margin-top: ${ViewportCalculator(25, "largeMobile")};
        margin-bottom: ${ViewportCalculator(25, "largeMobile")};
        padding: ${ViewportCalculator(15, "largeMobile")};
    }
    @media ${theme.media.mobile} {
        margin-top: ${ViewportCalculator(25, "mobile")};
        margin-bottom: ${ViewportCalculator(25, "mobile")};
        padding: ${ViewportCalculator(15, "mobile")};
    }
`
export const ContentWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    padding: 25px 250px;
    z-index: 50;
`
export const Button = styled.div`
    cursor: pointer;
    font-size: 22px;
    font-weight: 700;
    background: #fff;
    border-radius: 10px;
    width: fit-content;
    padding: 16px 29px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    margin-bottom: 60px;
`
export const ItemWrapper = styled.div`
    min-height: 360px;
    width: calc(50% - 25px);
    background: #efecff;
    border-top-right-radius: 30px;
    border-left: 8px solid #9680ff;
    z-index: 50;
    cursor: pointer;
`
export const ContentItemWrapper = styled.div`
    height: calc(50% - 10px);
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;

    > div {
        display: flex;
    }
    > div > p {
        font-size: 26px;
        font-weight: 700;
        color: rgba(0, 0, 0, 0.5);
    }
    > div > h1 {
        font-size: 26px;
        font-weight: 700;
    }
    > h2 {
        font-size: 16px;
        font-weight: 700;
        color: rgba(0, 0, 0, 0.5);
        overflow: hidden;
    }
`
export const Thumbnail = styled.div`
    height: 50%;
    width: 100%;
    background: no-repeat center/cover url(${(props) => props.urlThumb});
`
