import { createGlobalStyle } from "styled-components"
import "@fontsource/roboto-mono/100.css"
import "@fontsource/roboto-mono/100-italic.css"
import "@fontsource/roboto-mono/200.css"
import "@fontsource/roboto-mono/200-italic.css"
import "@fontsource/roboto-mono/300.css"
import "@fontsource/roboto-mono/300-italic.css"
import "@fontsource/roboto-mono/400.css"
import "@fontsource/roboto-mono/400-italic.css"
import "@fontsource/roboto-mono/500.css"
import "@fontsource/roboto-mono/500-italic.css"
import "@fontsource/roboto-mono/600.css"
import "@fontsource/roboto-mono/600-italic.css"
import "@fontsource/roboto-mono/700.css"
import "@fontsource/roboto-mono/700-italic.css"

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto Mono', sans-serif;
    }
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto Mono', sans-serif;
    }
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto Mono', sans-serif;
    }
    body {
        background: ${(props) => props.theme.bodyBackground};
        max-width: 1920px;
        margin-left: auto;
        margin-right: auto;
    }
`
