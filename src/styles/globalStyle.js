import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote,
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
       margin: 0;
       padding: 0;
       border: 0;
       font-size: 100%;
       font: inherit;
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


    * {
        box-sizing: border-box;
    }

    body {
      padding: 0;
      margin: 0;
      font-family: Montserrat, sans-serif;
      font-display: block;

    }
    a {
      text-decoration: none;
      color: inherit;
    }
    p, h1, h2, h3, h4 {
      line-height: 1.5em;
    }
    button {
      display: inline-block;
      border: none;
      padding: 0;
      margin: 0;
      text-decoration: none;
      cursor: pointer;
      text-align: center;
      font-family: inherit;
      font-size: 1em;
  }
  strong {
     font-weight: bold;
  }
  
.container {
   width: 100%;
   padding-right: 15px;
   padding-left: 15px;
   margin-right: auto;
   margin-left: auto; }
 
 @media (min-width: 576px) {
   .container {
     max-width: 540px; } }
 
 @media (min-width: 768px) {
   .container {
     max-width: 720px; } }
 
 @media (min-width: 992px) {
   .container {
     max-width: 960px; } }
 
 @media (min-width: 1200px) {
   .container {
     max-width: 1140px; } }
 
 .container-fluid {
   width: 100%;
   padding-right: 15px;
   padding-left: 15px;
   margin-right: auto;
   margin-left: auto; }
 
 .row {
   display: -ms-flexbox;
   display: flex;
   -ms-flex-wrap: wrap;
   flex-wrap: wrap;
   margin-right: -15px;
   margin-left: -15px; }
 
 .no-gutters {
   margin-right: 0;
   margin-left: 0; }
 
 .no-gutters > .col,
 .no-gutters > [class*="col-"] {
   padding-right: 0;
   padding-left: 0; }
 
 .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,
 .col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,
 .col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,
 .col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,
 .col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,
 .col-xl-auto {
   position: relative;
   width: 100%;
   min-height: 1px;
   padding-right: 15px;
   padding-left: 15px; }
 
 .col {
   -ms-flex-preferred-size: 0;
   flex-basis: 0;
   -ms-flex-positive: 1;
   flex-grow: 1;
   max-width: 100%; }
 
 .col-auto {
   -ms-flex: 0 0 auto;
   flex: 0 0 auto;
   width: auto;
   max-width: none; }
 
 .col-1 {
   -ms-flex: 0 0 8.333333%;
   flex: 0 0 8.333333%;
   max-width: 8.333333%; }
 
 .col-2 {
   -ms-flex: 0 0 16.666667%;
   flex: 0 0 16.666667%;
   max-width: 16.666667%; }
 
 .col-3 {
   -ms-flex: 0 0 25%;
   flex: 0 0 25%;
   max-width: 25%; }
 
 .col-4 {
   -ms-flex: 0 0 33.333333%;
   flex: 0 0 33.333333%;
   max-width: 33.333333%; }
 
 .col-5 {
   -ms-flex: 0 0 41.666667%;
   flex: 0 0 41.666667%;
   max-width: 41.666667%; }
 
 .col-6 {
   -ms-flex: 0 0 50%;
   flex: 0 0 50%;
   max-width: 50%; }
 
 .col-7 {
   -ms-flex: 0 0 58.333333%;
   flex: 0 0 58.333333%;
   max-width: 58.333333%; }
 
 .col-8 {
   -ms-flex: 0 0 66.666667%;
   flex: 0 0 66.666667%;
   max-width: 66.666667%; }
 
 .col-9 {
   -ms-flex: 0 0 75%;
   flex: 0 0 75%;
   max-width: 75%; }
 
 .col-10 {
   -ms-flex: 0 0 83.333333%;
   flex: 0 0 83.333333%;
   max-width: 83.333333%; }
 
 .col-11 {
   -ms-flex: 0 0 91.666667%;
   flex: 0 0 91.666667%;
   max-width: 91.666667%; }
 
 .col-12 {
   -ms-flex: 0 0 100%;
   flex: 0 0 100%;
   max-width: 100%; }
 
 .order-first {
   -ms-flex-order: -1;
   order: -1; }
 
 .order-last {
   -ms-flex-order: 13;
   order: 13; }
 
 .order-0 {
   -ms-flex-order: 0;
   order: 0; }
 
 .order-1 {
   -ms-flex-order: 1;
   order: 1; }
 
 .order-2 {
   -ms-flex-order: 2;
   order: 2; }
 
 .order-3 {
   -ms-flex-order: 3;
   order: 3; }
 
 .order-4 {
   -ms-flex-order: 4;
   order: 4; }
 
 .order-5 {
   -ms-flex-order: 5;
   order: 5; }
 
 .order-6 {
   -ms-flex-order: 6;
   order: 6; }
 
 .order-7 {
   -ms-flex-order: 7;
   order: 7; }
 
 .order-8 {
   -ms-flex-order: 8;
   order: 8; }
 
 .order-9 {
   -ms-flex-order: 9;
   order: 9; }
 
 .order-10 {
   -ms-flex-order: 10;
   order: 10; }
 
 .order-11 {
   -ms-flex-order: 11;
   order: 11; }
 
 .order-12 {
   -ms-flex-order: 12;
   order: 12; }
 
 .offset-1 {
   margin-left: 8.333333%; }
 
 .offset-2 {
   margin-left: 16.666667%; }
 
 .offset-3 {
   margin-left: 25%; }
 
 .offset-4 {
   margin-left: 33.333333%; }
 
 .offset-5 {
   margin-left: 41.666667%; }
 
 .offset-6 {
   margin-left: 50%; }
 
 .offset-7 {
   margin-left: 58.333333%; }
 
 .offset-8 {
   margin-left: 66.666667%; }
 
 .offset-9 {
   margin-left: 75%; }
 
 .offset-10 {
   margin-left: 83.333333%; }
 
 .offset-11 {
   margin-left: 91.666667%; }
 
 @media (min-width: 576px) {
   .col-sm {
     -ms-flex-preferred-size: 0;
     flex-basis: 0;
     -ms-flex-positive: 1;
     flex-grow: 1;
     max-width: 100%; }
   .col-sm-auto {
     -ms-flex: 0 0 auto;
     flex: 0 0 auto;
     width: auto;
     max-width: none; }
   .col-sm-1 {
     -ms-flex: 0 0 8.333333%;
     flex: 0 0 8.333333%;
     max-width: 8.333333%; }
   .col-sm-2 {
     -ms-flex: 0 0 16.666667%;
     flex: 0 0 16.666667%;
     max-width: 16.666667%; }
   .col-sm-3 {
     -ms-flex: 0 0 25%;
     flex: 0 0 25%;
     max-width: 25%; }
   .col-sm-4 {
     -ms-flex: 0 0 33.333333%;
     flex: 0 0 33.333333%;
     max-width: 33.333333%; }
   .col-sm-5 {
     -ms-flex: 0 0 41.666667%;
     flex: 0 0 41.666667%;
     max-width: 41.666667%; }
   .col-sm-6 {
     -ms-flex: 0 0 50%;
     flex: 0 0 50%;
     max-width: 50%; }
   .col-sm-7 {
     -ms-flex: 0 0 58.333333%;
     flex: 0 0 58.333333%;
     max-width: 58.333333%; }
   .col-sm-8 {
     -ms-flex: 0 0 66.666667%;
     flex: 0 0 66.666667%;
     max-width: 66.666667%; }
   .col-sm-9 {
     -ms-flex: 0 0 75%;
     flex: 0 0 75%;
     max-width: 75%; }
   .col-sm-10 {
     -ms-flex: 0 0 83.333333%;
     flex: 0 0 83.333333%;
     max-width: 83.333333%; }
   .col-sm-11 {
     -ms-flex: 0 0 91.666667%;
     flex: 0 0 91.666667%;
     max-width: 91.666667%; }
   .col-sm-12 {
     -ms-flex: 0 0 100%;
     flex: 0 0 100%;
     max-width: 100%; }
   .order-sm-first {
     -ms-flex-order: -1;
     order: -1; }
   .order-sm-last {
     -ms-flex-order: 13;
     order: 13; }
   .order-sm-0 {
     -ms-flex-order: 0;
     order: 0; }
   .order-sm-1 {
     -ms-flex-order: 1;
     order: 1; }
   .order-sm-2 {
     -ms-flex-order: 2;
     order: 2; }
   .order-sm-3 {
     -ms-flex-order: 3;
     order: 3; }
   .order-sm-4 {
     -ms-flex-order: 4;
     order: 4; }
   .order-sm-5 {
     -ms-flex-order: 5;
     order: 5; }
   .order-sm-6 {
     -ms-flex-order: 6;
     order: 6; }
   .order-sm-7 {
     -ms-flex-order: 7;
     order: 7; }
   .order-sm-8 {
     -ms-flex-order: 8;
     order: 8; }
   .order-sm-9 {
     -ms-flex-order: 9;
     order: 9; }
   .order-sm-10 {
     -ms-flex-order: 10;
     order: 10; }
   .order-sm-11 {
     -ms-flex-order: 11;
     order: 11; }
   .order-sm-12 {
     -ms-flex-order: 12;
     order: 12; }
   .offset-sm-0 {
     margin-left: 0; }
   .offset-sm-1 {
     margin-left: 8.333333%; }
   .offset-sm-2 {
     margin-left: 16.666667%; }
   .offset-sm-3 {
     margin-left: 25%; }
   .offset-sm-4 {
     margin-left: 33.333333%; }
   .offset-sm-5 {
     margin-left: 41.666667%; }
   .offset-sm-6 {
     margin-left: 50%; }
   .offset-sm-7 {
     margin-left: 58.333333%; }
   .offset-sm-8 {
     margin-left: 66.666667%; }
   .offset-sm-9 {
     margin-left: 75%; }
   .offset-sm-10 {
     margin-left: 83.333333%; }
   .offset-sm-11 {
     margin-left: 91.666667%; } }
 
 @media (min-width: 768px) {
   .col-md {
     -ms-flex-preferred-size: 0;
     flex-basis: 0;
     -ms-flex-positive: 1;
     flex-grow: 1;
     max-width: 100%; }
   .col-md-auto {
     -ms-flex: 0 0 auto;
     flex: 0 0 auto;
     width: auto;
     max-width: none; }
   .col-md-1 {
     -ms-flex: 0 0 8.333333%;
     flex: 0 0 8.333333%;
     max-width: 8.333333%; }
   .col-md-2 {
     -ms-flex: 0 0 16.666667%;
     flex: 0 0 16.666667%;
     max-width: 16.666667%; }
   .col-md-3 {
     -ms-flex: 0 0 25%;
     flex: 0 0 25%;
     max-width: 25%; }
   .col-md-4 {
     -ms-flex: 0 0 33.333333%;
     flex: 0 0 33.333333%;
     max-width: 33.333333%; }
   .col-md-5 {
     -ms-flex: 0 0 41.666667%;
     flex: 0 0 41.666667%;
     max-width: 41.666667%; }
   .col-md-6 {
     -ms-flex: 0 0 50%;
     flex: 0 0 50%;
     max-width: 50%; }
   .col-md-7 {
     -ms-flex: 0 0 58.333333%;
     flex: 0 0 58.333333%;
     max-width: 58.333333%; }
   .col-md-8 {
     -ms-flex: 0 0 66.666667%;
     flex: 0 0 66.666667%;
     max-width: 66.666667%; }
   .col-md-9 {
     -ms-flex: 0 0 75%;
     flex: 0 0 75%;
     max-width: 75%; }
   .col-md-10 {
     -ms-flex: 0 0 83.333333%;
     flex: 0 0 83.333333%;
     max-width: 83.333333%; }
   .col-md-11 {
     -ms-flex: 0 0 91.666667%;
     flex: 0 0 91.666667%;
     max-width: 91.666667%; }
   .col-md-12 {
     -ms-flex: 0 0 100%;
     flex: 0 0 100%;
     max-width: 100%; }
   .order-md-first {
     -ms-flex-order: -1;
     order: -1; }
   .order-md-last {
     -ms-flex-order: 13;
     order: 13; }
   .order-md-0 {
     -ms-flex-order: 0;
     order: 0; }
   .order-md-1 {
     -ms-flex-order: 1;
     order: 1; }
   .order-md-2 {
     -ms-flex-order: 2;
     order: 2; }
   .order-md-3 {
     -ms-flex-order: 3;
     order: 3; }
   .order-md-4 {
     -ms-flex-order: 4;
     order: 4; }
   .order-md-5 {
     -ms-flex-order: 5;
     order: 5; }
   .order-md-6 {
     -ms-flex-order: 6;
     order: 6; }
   .order-md-7 {
     -ms-flex-order: 7;
     order: 7; }
   .order-md-8 {
     -ms-flex-order: 8;
     order: 8; }
   .order-md-9 {
     -ms-flex-order: 9;
     order: 9; }
   .order-md-10 {
     -ms-flex-order: 10;
     order: 10; }
   .order-md-11 {
     -ms-flex-order: 11;
     order: 11; }
   .order-md-12 {
     -ms-flex-order: 12;
     order: 12; }
   .offset-md-0 {
     margin-left: 0; }
   .offset-md-1 {
     margin-left: 8.333333%; }
   .offset-md-2 {
     margin-left: 16.666667%; }
   .offset-md-3 {
     margin-left: 25%; }
   .offset-md-4 {
     margin-left: 33.333333%; }
   .offset-md-5 {
     margin-left: 41.666667%; }
   .offset-md-6 {
     margin-left: 50%; }
   .offset-md-7 {
     margin-left: 58.333333%; }
   .offset-md-8 {
     margin-left: 66.666667%; }
   .offset-md-9 {
     margin-left: 75%; }
   .offset-md-10 {
     margin-left: 83.333333%; }
   .offset-md-11 {
     margin-left: 91.666667%; } }
 
 @media (min-width: 992px) {
   .col-lg {
     -ms-flex-preferred-size: 0;
     flex-basis: 0;
     -ms-flex-positive: 1;
     flex-grow: 1;
     max-width: 100%; }
   .col-lg-auto {
     -ms-flex: 0 0 auto;
     flex: 0 0 auto;
     width: auto;
     max-width: none; }
   .col-lg-1 {
     -ms-flex: 0 0 8.333333%;
     flex: 0 0 8.333333%;
     max-width: 8.333333%; }
   .col-lg-2 {
     -ms-flex: 0 0 16.666667%;
     flex: 0 0 16.666667%;
     max-width: 16.666667%; }
   .col-lg-3 {
     -ms-flex: 0 0 25%;
     flex: 0 0 25%;
     max-width: 25%; }
   .col-lg-4 {
     -ms-flex: 0 0 33.333333%;
     flex: 0 0 33.333333%;
     max-width: 33.333333%; }
   .col-lg-5 {
     -ms-flex: 0 0 41.666667%;
     flex: 0 0 41.666667%;
     max-width: 41.666667%; }
   .col-lg-6 {
     -ms-flex: 0 0 50%;
     flex: 0 0 50%;
     max-width: 50%; }
   .col-lg-7 {
     -ms-flex: 0 0 58.333333%;
     flex: 0 0 58.333333%;
     max-width: 58.333333%; }
   .col-lg-8 {
     -ms-flex: 0 0 66.666667%;
     flex: 0 0 66.666667%;
     max-width: 66.666667%; }
   .col-lg-9 {
     -ms-flex: 0 0 75%;
     flex: 0 0 75%;
     max-width: 75%; }
   .col-lg-10 {
     -ms-flex: 0 0 83.333333%;
     flex: 0 0 83.333333%;
     max-width: 83.333333%; }
   .col-lg-11 {
     -ms-flex: 0 0 91.666667%;
     flex: 0 0 91.666667%;
     max-width: 91.666667%; }
   .col-lg-12 {
     -ms-flex: 0 0 100%;
     flex: 0 0 100%;
     max-width: 100%; }
   .order-lg-first {
     -ms-flex-order: -1;
     order: -1; }
   .order-lg-last {
     -ms-flex-order: 13;
     order: 13; }
   .order-lg-0 {
     -ms-flex-order: 0;
     order: 0; }
   .order-lg-1 {
     -ms-flex-order: 1;
     order: 1; }
   .order-lg-2 {
     -ms-flex-order: 2;
     order: 2; }
   .order-lg-3 {
     -ms-flex-order: 3;
     order: 3; }
   .order-lg-4 {
     -ms-flex-order: 4;
     order: 4; }
   .order-lg-5 {
     -ms-flex-order: 5;
     order: 5; }
   .order-lg-6 {
     -ms-flex-order: 6;
     order: 6; }
   .order-lg-7 {
     -ms-flex-order: 7;
     order: 7; }
   .order-lg-8 {
     -ms-flex-order: 8;
     order: 8; }
   .order-lg-9 {
     -ms-flex-order: 9;
     order: 9; }
   .order-lg-10 {
     -ms-flex-order: 10;
     order: 10; }
   .order-lg-11 {
     -ms-flex-order: 11;
     order: 11; }
   .order-lg-12 {
     -ms-flex-order: 12;
     order: 12; }
   .offset-lg-0 {
     margin-left: 0; }
   .offset-lg-1 {
     margin-left: 8.333333%; }
   .offset-lg-2 {
     margin-left: 16.666667%; }
   .offset-lg-3 {
     margin-left: 25%; }
   .offset-lg-4 {
     margin-left: 33.333333%; }
   .offset-lg-5 {
     margin-left: 41.666667%; }
   .offset-lg-6 {
     margin-left: 50%; }
   .offset-lg-7 {
     margin-left: 58.333333%; }
   .offset-lg-8 {
     margin-left: 66.666667%; }
   .offset-lg-9 {
     margin-left: 75%; }
   .offset-lg-10 {
     margin-left: 83.333333%; }
   .offset-lg-11 {
     margin-left: 91.666667%; } }
 
 @media (min-width: 1200px) {
   .col-xl {
     -ms-flex-preferred-size: 0;
     flex-basis: 0;
     -ms-flex-positive: 1;
     flex-grow: 1;
     max-width: 100%; }
   .col-xl-auto {
     -ms-flex: 0 0 auto;
     flex: 0 0 auto;
     width: auto;
     max-width: none; }
   .col-xl-1 {
     -ms-flex: 0 0 8.333333%;
     flex: 0 0 8.333333%;
     max-width: 8.333333%; }
   .col-xl-2 {
     -ms-flex: 0 0 16.666667%;
     flex: 0 0 16.666667%;
     max-width: 16.666667%; }
   .col-xl-3 {
     -ms-flex: 0 0 25%;
     flex: 0 0 25%;
     max-width: 25%; }
   .col-xl-4 {
     -ms-flex: 0 0 33.333333%;
     flex: 0 0 33.333333%;
     max-width: 33.333333%; }
   .col-xl-5 {
     -ms-flex: 0 0 41.666667%;
     flex: 0 0 41.666667%;
     max-width: 41.666667%; }
   .col-xl-6 {
     -ms-flex: 0 0 50%;
     flex: 0 0 50%;
     max-width: 50%; }
   .col-xl-7 {
     -ms-flex: 0 0 58.333333%;
     flex: 0 0 58.333333%;
     max-width: 58.333333%; }
   .col-xl-8 {
     -ms-flex: 0 0 66.666667%;
     flex: 0 0 66.666667%;
     max-width: 66.666667%; }
   .col-xl-9 {
     -ms-flex: 0 0 75%;
     flex: 0 0 75%;
     max-width: 75%; }
   .col-xl-10 {
     -ms-flex: 0 0 83.333333%;
     flex: 0 0 83.333333%;
     max-width: 83.333333%; }
   .col-xl-11 {
     -ms-flex: 0 0 91.666667%;
     flex: 0 0 91.666667%;
     max-width: 91.666667%; }
   .col-xl-12 {
     -ms-flex: 0 0 100%;
     flex: 0 0 100%;
     max-width: 100%; }
   .order-xl-first {
     -ms-flex-order: -1;
     order: -1; }
   .order-xl-last {
     -ms-flex-order: 13;
     order: 13; }
   .order-xl-0 {
     -ms-flex-order: 0;
     order: 0; }
   .order-xl-1 {
     -ms-flex-order: 1;
     order: 1; }
   .order-xl-2 {
     -ms-flex-order: 2;
     order: 2; }
   .order-xl-3 {
     -ms-flex-order: 3;
     order: 3; }
   .order-xl-4 {
     -ms-flex-order: 4;
     order: 4; }
   .order-xl-5 {
     -ms-flex-order: 5;
     order: 5; }
   .order-xl-6 {
     -ms-flex-order: 6;
     order: 6; }
   .order-xl-7 {
     -ms-flex-order: 7;
     order: 7; }
   .order-xl-8 {
     -ms-flex-order: 8;
     order: 8; }
   .order-xl-9 {
     -ms-flex-order: 9;
     order: 9; }
   .order-xl-10 {
     -ms-flex-order: 10;
     order: 10; }
   .order-xl-11 {
     -ms-flex-order: 11;
     order: 11; }
   .order-xl-12 {
     -ms-flex-order: 12;
     order: 12; }
   .offset-xl-0 {
     margin-left: 0; }
   .offset-xl-1 {
     margin-left: 8.333333%; }
   .offset-xl-2 {
     margin-left: 16.666667%; }
   .offset-xl-3 {
     margin-left: 25%; }
   .offset-xl-4 {
     margin-left: 33.333333%; }
   .offset-xl-5 {
     margin-left: 41.666667%; }
   .offset-xl-6 {
     margin-left: 50%; }
   .offset-xl-7 {
     margin-left: 58.333333%; }
   .offset-xl-8 {
     margin-left: 66.666667%; }
   .offset-xl-9 {
     margin-left: 75%; }
   .offset-xl-10 {
     margin-left: 83.333333%; }
   .offset-xl-11 {
     margin-left: 91.666667%; } }
 
 .d-none {
   display: none !important; }
 
 .d-inline {
   display: inline !important; }
 
 .d-inline-block {
   display: inline-block !important; }
 
 .d-block {
   display: block !important; }
 
 .d-table {
   display: table !important; }
 
 .d-table-row {
   display: table-row !important; }
 
 .d-table-cell {
   display: table-cell !important; }
 
 .d-flex {
   display: -ms-flexbox !important;
   display: flex !important; }
 
 .d-inline-flex {
   display: -ms-inline-flexbox !important;
   display: inline-flex !important; }
 
 @media (min-width: 576px) {
   .d-sm-none {
     display: none !important; }
   .d-sm-inline {
     display: inline !important; }
   .d-sm-inline-block {
     display: inline-block !important; }
   .d-sm-block {
     display: block !important; }
   .d-sm-table {
     display: table !important; }
   .d-sm-table-row {
     display: table-row !important; }
   .d-sm-table-cell {
     display: table-cell !important; }
   .d-sm-flex {
     display: -ms-flexbox !important;
     display: flex !important; }
   .d-sm-inline-flex {
     display: -ms-inline-flexbox !important;
     display: inline-flex !important; } }
 
 @media (min-width: 768px) {
   .d-md-none {
     display: none !important; }
   .d-md-inline {
     display: inline !important; }
   .d-md-inline-block {
     display: inline-block !important; }
   .d-md-block {
     display: block !important; }
   .d-md-table {
     display: table !important; }
   .d-md-table-row {
     display: table-row !important; }
   .d-md-table-cell {
     display: table-cell !important; }
   .d-md-flex {
     display: -ms-flexbox !important;
     display: flex !important; }
   .d-md-inline-flex {
     display: -ms-inline-flexbox !important;
     display: inline-flex !important; } }
 
 @media (min-width: 992px) {
   .d-lg-none {
     display: none !important; }
   .d-lg-inline {
     display: inline !important; }
   .d-lg-inline-block {
     display: inline-block !important; }
   .d-lg-block {
     display: block !important; }
   .d-lg-table {
     display: table !important; }
   .d-lg-table-row {
     display: table-row !important; }
   .d-lg-table-cell {
     display: table-cell !important; }
   .d-lg-flex {
     display: -ms-flexbox !important;
     display: flex !important; }
   .d-lg-inline-flex {
     display: -ms-inline-flexbox !important;
     display: inline-flex !important; } }
 
 @media (min-width: 1200px) {
   .d-xl-none {
     display: none !important; }
   .d-xl-inline {
     display: inline !important; }
   .d-xl-inline-block {
     display: inline-block !important; }
   .d-xl-block {
     display: block !important; }
   .d-xl-table {
     display: table !important; }
   .d-xl-table-row {
     display: table-row !important; }
   .d-xl-table-cell {
     display: table-cell !important; }
   .d-xl-flex {
     display: -ms-flexbox !important;
     display: flex !important; }
   .d-xl-inline-flex {
     display: -ms-inline-flexbox !important;
     display: inline-flex !important; } }
 
 @media print {
   .d-print-none {
     display: none !important; }
   .d-print-inline {
     display: inline !important; }
   .d-print-inline-block {
     display: inline-block !important; }
   .d-print-block {
     display: block !important; }
   .d-print-table {
     display: table !important; }
   .d-print-table-row {
     display: table-row !important; }
   .d-print-table-cell {
     display: table-cell !important; }
   .d-print-flex {
     display: -ms-flexbox !important;
     display: flex !important; }
   .d-print-inline-flex {
     display: -ms-inline-flexbox !important;
     display: inline-flex !important; } }
 
 .flex-row {
   -ms-flex-direction: row !important;
   flex-direction: row !important; }
 
 .flex-column {
   -ms-flex-direction: column !important;
   flex-direction: column !important; }
 
 .flex-row-reverse {
   -ms-flex-direction: row-reverse !important;
   flex-direction: row-reverse !important; }
 
 .flex-column-reverse {
   -ms-flex-direction: column-reverse !important;
   flex-direction: column-reverse !important; }
 
 .flex-wrap {
   -ms-flex-wrap: wrap !important;
   flex-wrap: wrap !important; }
 
 .flex-nowrap {
   -ms-flex-wrap: nowrap !important;
   flex-wrap: nowrap !important; }
 
 .flex-wrap-reverse {
   -ms-flex-wrap: wrap-reverse !important;
   flex-wrap: wrap-reverse !important; }
 
 .flex-fill {
   -ms-flex: 1 1 auto !important;
   flex: 1 1 auto !important; }
 
 .flex-grow-0 {
   -ms-flex-positive: 0 !important;
   flex-grow: 0 !important; }
 
 .flex-grow-1 {
   -ms-flex-positive: 1 !important;
   flex-grow: 1 !important; }
 
 .flex-shrink-0 {
   -ms-flex-negative: 0 !important;
   flex-shrink: 0 !important; }
 
 .flex-shrink-1 {
   -ms-flex-negative: 1 !important;
   flex-shrink: 1 !important; }
 
 .justify-content-start {
   -ms-flex-pack: start !important;
   justify-content: flex-start !important; }
 
 .justify-content-end {
   -ms-flex-pack: end !important;
   justify-content: flex-end !important; }
 
 .justify-content-center {
   -ms-flex-pack: center !important;
   justify-content: center !important; }
 
 .justify-content-between {
   -ms-flex-pack: justify !important;
   justify-content: space-between !important; }
 
 .justify-content-around {
   -ms-flex-pack: distribute !important;
   justify-content: space-around !important; }
 
 .align-items-start {
   -ms-flex-align: start !important;
   align-items: flex-start !important; }
 
 .align-items-end {
   -ms-flex-align: end !important;
   align-items: flex-end !important; }
 
 .align-items-center {
   -ms-flex-align: center !important;
   align-items: center !important; }
 
 .align-items-baseline {
   -ms-flex-align: baseline !important;
   align-items: baseline !important; }
 
 .align-items-stretch {
   -ms-flex-align: stretch !important;
   align-items: stretch !important; }
 
 .align-content-start {
   -ms-flex-line-pack: start !important;
   align-content: flex-start !important; }
 
 .align-content-end {
   -ms-flex-line-pack: end !important;
   align-content: flex-end !important; }
 
 .align-content-center {
   -ms-flex-line-pack: center !important;
   align-content: center !important; }
 
 .align-content-between {
   -ms-flex-line-pack: justify !important;
   align-content: space-between !important; }
 
 .align-content-around {
   -ms-flex-line-pack: distribute !important;
   align-content: space-around !important; }
 
 .align-content-stretch {
   -ms-flex-line-pack: stretch !important;
   align-content: stretch !important; }
 
 .align-self-auto {
   -ms-flex-item-align: auto !important;
   align-self: auto !important; }
 
 .align-self-start {
   -ms-flex-item-align: start !important;
   align-self: flex-start !important; }
 
 .align-self-end {
   -ms-flex-item-align: end !important;
   align-self: flex-end !important; }
 
 .align-self-center {
   -ms-flex-item-align: center !important;
   align-self: center !important; }
 
 .align-self-baseline {
   -ms-flex-item-align: baseline !important;
   align-self: baseline !important; }
 
 .align-self-stretch {
   -ms-flex-item-align: stretch !important;
   align-self: stretch !important; }
   body {
      font-family: "LatoWeb", sans-serif;
      font-size: 1rem; }
    
    section:not(#home) {
      padding-bottom: 5rem;
      text-align: center; }
    
    .section__header_title {
      font-family: "LatoWeb", sans-serif;
      font-size: 2.25rem;
      line-height: 1.4;
      margin-top: 5rem;
      letter-spacing: 1.5rem;
      text-transform: uppercase;
      color: #434343; }
    
    .section__header_image {
      max-width: 220px;
      width: 100%;
      margin: 2.5rem 0; }
    
    .custom_dots li {
      display: inline-block; }
      .custom_dots li:not(:last-child) {
        margin-right: 5px; }
      .custom_dots li button {
        font-size: 0;
        line-height: 0;
        cursor: pointer;
        width: 12px;
        height: 12px;
        background-color: transparent;
        border: 0.5px solid #7abd33;
        border-radius: 50%;
        transition: all .5s ease; }
      .custom_dots li.slick-active button {
        background: #8fd547; }
    
    .bg_mask {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(67, 67, 67, 0.9);
      z-index: 50;
      visibility: hidden;
      opacity: 0;
      transition: .6s; }
    
    .modal_window {
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 9px 9px rgba(0, 0, 0, 0.1);
      position: fixed;
      top: 50%;
      left: 50%;
      max-width: 400px;
      max-height: 300px;
      width: 100%;
      height: 100%;
      margin-left: -200px;
      margin-top: -150px;
      background: #7abd33;
      padding: 10px;
      color: #ffffff;
      z-index: 100;
      transition: .3s ease-out;
      transform: translateY(45px); }
      .modal_window_closeButton {
        position: absolute;
        top: 0;
        right: 0;
        width: 35px;
        height: 30px;
        background: #363636;
        color: #ffffff;
        cursor: pointer;
        border: 0; }
      .modal_window .modalHeader {
        font-family: "LatoWebHeavy", sans-serif;
        font-size: 2rem;
        margin-bottom: 1rem; }
    
    .active {
      visibility: visible;
      opacity: 1; }
    
    .active + .modal_window {
      visibility: visible;
      opacity: 1;
      transform: translateY(0); }
    
    .no_scroll {
      overflow: hidden; }
    
    @media (max-width: 575.98px) {
      .modal_window {
        max-width: 310px;
        margin-left: -155px;
        max-height: 250px;
        margin-top: -125px; } }
    
    .header {
      background-color: #ffffff;
      padding: 20px 0;
      top: 0;
      left: 0;
      position: fixed;
      z-index: 999;
      width: 100%; }
      .header_fixed {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 999;
        background-color: rgba(255, 255, 255, 0.95);
        border-bottom: 1px solid #c4c4c4;
        animation: slide-down .6s; }
    
    .navigation {
      display: flex;
      justify-content: space-between;
      align-items: center; }
      .navigation__logo {
        display: inline-block;
        line-height: 10px; }
        .navigation__logo_img {
          width: auto;
          height: 100%;
          min-height: 30px;
          max-height: 55px; }
      .navigation__menu_link {
        display: inline-block;
        font: 16px/18px "LatoWeb", sans-serif;
        text-transform: uppercase;
        color: #434343;
        transition: color .2s ease;
        position: relative; }
        .navigation__menu_link:not(:last-child) {
          margin-right: 25px; }
          .navigation__menu_link:hover{
            cursor:pointer;
          }
        .navigation__menu_link:before {
          content: "";
          position: absolute;
          width: 100%;
          height: 1px;
          bottom: -2px;
          left: 0;
          background-color: #7abd33;
          visibility: hidden;
          -webkit-transition: all .2s ease-in-out 0s;
          -moz-transition: all .2s ease-in-out 0s;
          -o-transition: all .2s ease-in-out 0s;
          transition: all .2s ease-in-out 0s;
          -webkit-transform: scaleX(0);
          -moz-transform: scaleX(0);
          -o-transform: scaleX(0);
          transform: scaleX(0); }
        .navigation__menu_link:hover {
          color: #7abd33; }
          .navigation__menu_link:hover:before {
            visibility: visible;
            -webkit-transform: scaleX(1);
            transform: scaleX(1); }
        .navigation__menu_link.active {
          color: #7abd33; }
          .navigation__menu_link.active:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 1px;
            bottom: -2px;
            left: 0;
            background-color: #7abd33;
            visibility: visible;
            -webkit-transform: scaleX(1);
            -moz-transform: scaleX(1);
            -o-transform: scaleX(1);
            transform: scaleX(1); }
    
    .burger {
      width: 30px;
      height: 22px;
      display: none;
      transform: rotate(0);
      transition: 0.5s ease-in-out;
      cursor: pointer; }
      .burger span {
        display: block;
        position: absolute;
        height: 2px;
        width: 100%;
        background: #434343;
        opacity: 1;
        left: 0;
        transform: rotate(0);
        transition: all .3s ease-in-out; }
      .burger span:nth-child(1) {
        top: 0; }
      .burger span:nth-child(2), .burger span:nth-child(3) {
        top: 10px; }
      .burger span:nth-child(4) {
        top: 20px; }
    
    .burger.open span:nth-child(1), .burger.open span:nth-child(4) {
      top: 10px;
      width: 0;
      left: 50%; }
    
    .burger.open span:nth-child(2) {
      transform: rotate(45deg);
      background: #c4c4c4; }
    
    .burger.open span:nth-child(3) {
      transform: rotate(-45deg);
      background: #c4c4c4; }
    
    @keyframes slide-down {
      0% {
        opacity: 0;
        transform: translateY(-100%); }
      100% {
        opacity: 1;
        transform: translateY(0); } }
    
    @media (max-width: 991.98px) {
      .header .container {
        max-width: unset; }
      .navigation__menu {
        position: absolute;
        top: 70px;
        left: 0;
        right: 0;
        background-color: rgba(255, 255, 255, 0.95);
        z-index: 999; }
        .navigation__menu_link {
          display: block;
          padding: 15px;
          border-top: 1px solid #c4c4c4;
          text-align: center; }
          .navigation__menu_link:not(:last-child) {
            margin-right: 0; }
          .navigation__menu_link:last-child {
            border-bottom: 1px solid #c4c4c4; }
      .navigation .burger {
        display: inline-block; } }
    
    .footer {
      background-color: #ffffff;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      padding: 40px 0; }
      .footer__inner {
        text-align: center;
        font-size: 1.125rem; }
        .footer__inner_text {
          line-height: 1.7; }
          .footer__inner_text--small {
            font-size: .8rem;
            padding-top: 1rem; }
            .thumbnail-cont{
               width: 100%;
               display: flex;
               align-items: flex-start;
               justify-content: center;
               flex-wrap: wrap;
            }
      #snipcart-discounts, .js-next.snip-btn {
        display:none!important;
        padding: 0;
      }
      .snipcart-summary:hover > .snipcart-checkout,
      .snipcart-summary:hover > .snipcart-checkout-items{
          color: #7abd33;
      }
`