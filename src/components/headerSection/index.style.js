import styled from "styled-components"

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

    > h1 {
        color: #cec4ff;
        font-size: 50px;
    }
    > p {
        color: #cec4ff;
        font-size: 18px;
        margin-left: 20px;
    }
`
