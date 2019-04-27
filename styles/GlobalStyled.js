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
  
  .fadeInUp {
    -webkit-animation-name: fadeInUp;
    animation-name: fadeInUp;
  }
  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  .fadeIn {
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
  }
  @keyframes fadeInUp {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 10%, 0);
      transform: translate3d(0, 10%, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
`;