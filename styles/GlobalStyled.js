import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
  ${reset};
  /* @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700'); */
  * {
    box-sizing: border-box;
  }
  body {
    font-size: 14px;
    font-family: -apple-system,sans-serif!important;
    line-height: initial;
  }
  a {
    text-decoration:none;
  }
  input:focus {
    outline: none;
  }
`;