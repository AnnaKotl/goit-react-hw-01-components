import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

    body {
    margin: 0;
    font-family: 'Borel', cursive;
    line-height: 1.02;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-image: radial-gradient(circle at 50% -20.71%, #abd9f4 0, #b0d8f6 6.25%, #b5d6f8 12.5%, #bbd5f8 18.75%, #c1d3f8 25%, #c8d2f8 31.25%, #ced0f6 37.5%, #d4cff4 43.75%, #dacdf2 50%, #e0cbef 56.25%, #e5caec 62.5%, #eac9e8 68.75%, #eec8e3 75%, #f2c7df 81.25%, #f5c6da 87.5%, #f8c6d5 93.75%, #f9c6d0 100%);
    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
    margin: 0;
    }
    ul,
    li {
    margin: 0;
    padding: 0;
    list-style: none;
    }
    img {
    display: block;
    max-width: 100%;
    height: auto;
    }

`;