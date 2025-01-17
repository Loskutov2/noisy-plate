import { createGlobalStyle } from "styled-components";
import texture from './texture.svg';

export const GlobalStyle=createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    font-family: 'Tomorrow';
    color: ${({ theme }) => theme.color.text};
    font-weight: 500;
}
body {
    position: relative;
    width: 100vw;
    height: 100vh;
    background: ${({ theme }) => theme.color.background};
    overflow: hidden;
    &::before{
        content: "";
        position: fixed;
        background: url(${texture});
        width: 100%;
        height: 100%;
        background-size: 15px;
        z-index: 9999;
        pointer-events: none;
}}
`