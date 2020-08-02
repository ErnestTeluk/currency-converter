import styled, { createGlobalStyle } from 'styled-components';

import MontserratRegularWoff from 'Assets/Fonts/Montserrat-Regular.woff';
import MontserratRegularWoff2 from 'Assets/Fonts/Montserrat-Regular.woff2';
import MontserratBoldWoff from 'Assets/Fonts/Montserrat-Bold.woff';
import MontserratBoldWoff2 from 'Assets/Fonts/Montserrat-Bold.woff2';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Montserrat';
        src: url(${MontserratRegularWoff2}) format('woff2'), url(${MontserratRegularWoff}) format('woff');
        font-weight: 400;
        font-style: normal;
    }
    
    @font-face {
        font-family: 'Montserrat';
        src: url(${MontserratBoldWoff2}) format('woff2'), url(${MontserratBoldWoff}) format('woff');
        font-weight: 700;
        font-style: normal;
    }

    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        font-size: 62.5%;
    }

    body {
        margin: 0;
        font-family: 'Century Gothic', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 1.15;
        overflow-x: hidden;
    }
`;

export const SiteWrapper = styled.div`
  width: 100%;
  height: auto;
`;
