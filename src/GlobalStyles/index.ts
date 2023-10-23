import { createGlobalStyle } from "styled-components";
import { resetCSS } from "./reset.css";

export const GlobalStyles = createGlobalStyle`
    ${resetCSS}
    :root {
        --light: #757ce8;
        --main: #3f50b5;
        --dark: #002884;
    }

    body {
        font-size: 12px;
        font-family: 'Sometype Mono', monospace;;
    }

    .error-404 { 
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;
        font-size: 3rem;
        background-color: var(--light);
        color: white;
    }
`;
