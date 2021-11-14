import { createGlobalStyle } from 'styled-components'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default createGlobalStyle`
  html, body {
    font-family: Inter, sans-serif;
    font-size: 14px;
    background-color: #000;
    color: #fff;
    line-height: 1.5;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
`
