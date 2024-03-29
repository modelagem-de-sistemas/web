//  @ts-nocheck

import { memo } from 'react';
import { createGlobalStyle } from 'styled-components';

export default memo(createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    font-family: var(--fonts) !important;
    z-index: 1;
  }

  html,
  body,
  #root {
    height: 100vh;
    width: 100%;
    position: relative;
    background: var(--color-background);
    font-family: var(--fonts) !important;
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
  }

  button,
  a,
  div,
  i {
    -webkit-tap-highlight-color: transparent;
  }

  :root {
    font-size: 16px !important;
    font-display: swap;

    --color-theme: 1;
    --color-background: #fbfbfe;
    --first-color: hsl(var(--color-theme), 69%, 61%);
    --first-color-dark: hsl(var(--color-theme), 100%, 15.1%);
    --first-color-second: hsl(var(--color-theme), 69%, 61%);
    --first-color-alt: hsl(var(--color-theme), 57%, 53%);
    --first-color-light: hsl(var(--color-theme), 80%, 95%);
    --first-color-lighten: hsl(0, 0%, 94.9%);
    --first-color-lighter: hsl(var(--color-theme), 92%, 85%);
    --title-color: hsl(var(--color-theme), 8%, 15%);
    --text-color: hsl(var(--color-theme), 8%, 45%);
    --text-color-light: hsl(var(--color-theme), 8%, 65%);
    --input-color: hsl(var(--color-theme), 70%, 96%);
    --body-color: hsl(var(--color-theme), 60%, 99%);
    --container-color: #fff;
    --scroll-bar-color: hsl(var(--color-theme), 12%, 90%);
    --scroll-thumb-color: hsl(var(--color-theme), 12%, 80%);

    --header-height: 3rem;

    --body-font: 'Poppins', sans-serif;
    --z-fixed: 100;

    --normal-font-size: 0.938rem;
    --small-font-size: 0.75rem;
    --smaller-font-size: 0.75rem;

    @media screen and (min-width: 1024px) {
      --normal-font-size: 1rem;
      --small-font-size: 0.875rem;
      --smaller-font-size: 0.813rem;
    }

    /*========== Font weight ==========*/
    --font-medium: 500;
    --font-semi-bold: 600;

    --color-text: #222;

    --header-height: 3.5rem;
    --z-fixed: 100;

    --border-radius: 4px;
    --medium-border-radius: 10px;
    --big-border-radius: 20px;
    --transition: 0.2s ease-in-out;
    --fast-transition: 0.1s ease-in-out;

    --fonts: Poppins, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;

    --font-big-size: 3.2rem;
    --font-medium-size: 48px;
    --font-big-title-size: 2.5rem;
    --font-title-size: 1.5rem;
    --font-small-title-size: 1.2rem;
    --font-big-subtitle-size: 1.5rem;
    --font-subtitle-size: 1rem;
    --font-big-text-size: 1.2rem;
    --font-text-size: 0.9rem;

    @media screen and (min-width: 1600px) {
      --font-big-size: 70px;
      --font-big-text-size: 24px;
      --font-big-subtitle-size: 36px;
    }

    @media screen and (min-width: 600px) and (max-width: 1400px) {
      --font-big-size: 2.5rem;
      --font-big-text-size: 1rem;
      --font-big-subtitle-size: 1.5rem;
    }

    @media screen and (max-width: 600px) {
      --font-big-size: 2.2rem;
      --font-medium-size: 32px;
      --font-big-title-size: 2rem;
      --font-big-subtitle-size: 24px;
      --font-title-size: 1.2rem;
      --font-subtitle-size: 0.9rem;
      --font-big-text-size: 1rem;
      --font-text-size: 0.8rem;
    }
  }
`);
