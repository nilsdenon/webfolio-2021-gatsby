import { css } from 'styled-components';
import reset from 'styled-reset';
import InterUprgrigthVar from '../assets/fonts/inter/Inter-upright-var.woff2';
import InterItalicVar from '../assets/fonts/inter/Inter-italic-var.woff2';

export const fontStack = {
  default: `"Inter var", -apple-system, BlinkMacSystemFont,
      "Helvetica Neue", Helvetica, sans-serif;`,
};

export const measurements = {
  fontSize: '1.6rem',
  baseUnit: '.8rem',
  basePaddding: '3rem',
  contentWidth: '1920px',
};

const Typography = css`
  @font-face {
    font-family: 'Inter var';
    font-weight: 100 900; /* stylelint-disable-line font-weight-notation */
    font-style: normal;
    font-display: swap;
    src: url(${InterUprgrigthVar}) format('woff2');
  }

  @font-face {
    font-family: 'Inter var';
    font-weight: 100 900; /* stylelint-disable-line font-weight-notation */
    font-style: italic;
    font-display: swap;
    src: url(${InterItalicVar}) format('woff2');
  }
  @supports (font-variation-settings: normal) {
    body {
      font-family: ${fontStack.default};
    }
  }
  body {
    font-family: ${fontStack.default};
    font-size: ${measurements.fontSize};
    letter-spacing: -0.015em;
  }
`;

export const colors = {
  light: '#dee0e0',
  grays: {
    darkGray: '#333',
    mediumGray: '#9999',
    lightGray: '#EDF2F7',
  },
  blues: {
    blue700: '#1188EE',
  },
  accents: {
    primary: '#f30062',
  },
};

export const dimensions = {
  fontSizeM: '16px',
  contentWidth: '1920px',
  base5: {
    _1x: '5px',
    _2x: '10px',
    _3x: '15px',
    _4x: '20px',
    _5x: '25px',
    _6x: '30px',
    _7x: '35px',
    _8x: '40px',
    _9x: '45px',
    _10x: '50px',
  },
  base4: {
    _1x: '4px',
    _2x: '8px',
    _3x: '12px',
    _4x: '16px',
    _5x: '20px',
    _6x: '24px',
    _7x: '28px',
    _8x: '32px',
    _9x: '36px',
    _10x: '40px',
  },
  space: '5px',
  space2x: '10px',
  space3x: '15px',
  space4x: '20px',
  space5x: '25px',
  space6x: '30px',
  space7x: '35px',
  space8x: '40px',
  space9x: '45px',
  space10x: '50px',
  container: {
    extraLarge: '1920px',
    large: '1440px',
    medium: '1140px',
    small: '960px',
  },
};

export const BaseMetrics = css`
  display: flex;
  margin: 0 auto;
  max-width: ${dimensions.container.large};
  @media (min-width: 769px) {
    padding-left: ${dimensions.base4._4x};
    padding-right: ${dimensions.base4._4x};
  }
  @media (max-width: 768px) {
    padding-left: ${dimensions.base4._2x};
    padding-right: ${dimensions.base4._2x};
  }

  width: 100%;
`;

const General = css`
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%; /* 1rem = 10px */
    scroll-behavior: smooth;
    /* Smoothing */
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
  }
  body {
    background: ${colors.light};
  }
  a {
    color: ${colors.blues.blue700};
    text-decoration: none;
  }
`;

export const mainStyles = css`
  ${reset}
  ${General}
  ${Typography}
`;
