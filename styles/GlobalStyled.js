import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
  ${reset};
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
    animation-duration: 0.7s;
  }
  .animation-active {
    * {
      animation-fill-mode: forwards;
    }
    .fadeIn {
      animation-name: fadeIn;
    }
    .fadeInUp {
      animation-name: fadeInUp;
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
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(10%);
    }
    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`;
