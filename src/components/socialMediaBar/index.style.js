import { Link } from "gatsby"
import styled from "styled-components"

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
