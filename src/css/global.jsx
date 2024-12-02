import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    border: 0;
    font-size: 62.5%;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Pretendard-Regular';
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  :root {
    --primary: #336155;
    --secondary: #4daabc;
    --tertiary: #f7f1ed;
    --accent: #ff9100;
    --white: #fff;
    --gray: #757575;
    --black: #282828;
    --disabled: #bdbdbd;
    --closed: #e46962;
    --bgClosed: #ffd9d9;
    --bgAvailable: #e0ffd9;
    --bgDisabled: #eee;
  }

  /* FullCalendar */
  .fc-daygrid-day {
    height: 7.5rem;
  }

  .fc-daygrid-day-top{
    justify-content: center ;
  }

  .fc-daygrid-day-events {
    display: flex;
    justify-content: center;
  }
`;

export default GlobalStyle;
