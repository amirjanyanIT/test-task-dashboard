import { createGlobalStyle } from "styled-components";
import { resetCSS } from "./reset.css";

export const GlobalStyles = createGlobalStyle`
    ${resetCSS}
    :root {
        --light: #757ce8;
        --main: #3f50b5;
        --dark: #002884;
    }
`;
