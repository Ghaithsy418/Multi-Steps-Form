import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root{
    --color-marine-blue: hsl(213,96%,18%);
    --color-purplish-blue: hsl(243,100%,62%);
    --color-pastel-blue: hsl(228,100%,84%);
    --color-light-blue: hsl(206,94%,87%);
    --color-strawberry-red: hsl(354,84%,57%);
    --color-cool-gray: hsl(231,11%,63%);
    --color-light-gray: hsl(229,24%,87%);
    --color-magnolia: hsl(217,100%,97%);
    --color-alabaster: hsl(231,100%,99%);
}

@font-face {
    font-family: "Ubuntu";
    src: url("./fonts/Ubuntu-Bold.ttf");
    src: url("./fonts/Ubuntu-Medium.ttf");
    src: url("./fonts/Ubuntu-Regular.ttf");
}

html{
    font-size: 105%;
}

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{
    font-family: "Ubuntu", sans-serif;
    font-size: 1rem;
    font-weight: 500;
    background-color: var(--color-light-gray);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 6rem;
}

`;

export default GlobalStyles;
