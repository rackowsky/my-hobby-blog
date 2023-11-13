import styled from "styled-components"

export const NotFoundPageTemplateWrapper = styled.div`
    min-height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 25px;

    > h1 {
        color: #9680ff;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 50px;
        text-align: center;
    }
    > a {
        margin-bottom: 75px;
        color: #9680ff;
        font-weight: 700;
        font-size: 20px;
        text-decoration: underline;
        text-align: center;
    }
`
