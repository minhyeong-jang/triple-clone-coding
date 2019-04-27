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
  strong {
    font-weight: bold;
  }
  input:focus {
    outline: none;
  }
  
  .fadeInUp, .fadeIn {
    opacity: 0;
  }
  .animation-active .fadeInUp {
    -webkit-animation-name: fadeInUp;
    animation-name: fadeInUp;
     animation-fill-mode: forwards;
  }
  .animation-active .fadeIn {
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
       animation-fill-mode: forwards;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
  @keyframes fadeInUp {
    0% {
        display: none;
        opacity: 0;
    }
    1% {
        display: block;
        opacity: 0;
      transform: translate3d(0, 10%, 0);
    }

    100% {
        display: block;
        opacity: 1;
      transform: translate3d(0, 0%, 0);
    }
    from {
      /* opacity: 0;
      -webkit-transform: translate3d(0, 10%, 0);
      transform: translate3d(0, 10%, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    } */
  }
`;