const PC_SIZE = "1142px";
const MOBILE_SIZE = "1141px";
const LINK_BUTTON = `
  display: block;
  width: 180px;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  border-radius: 25px;
  transition: all 200ms ease-in-out 0s;
`;

export default {
  blackColor: "#3a3a3a",
  regularBlackColor: "#3a3a3acc",
  lightBlackColor: "#3a3a3ab3",
  container: `
    position: relative;
    overflow: hidden;
    background-size: 100% 100%;
  `,
  responsiveLayout: `
    position: relative;
    margin: 0 auto;
    @media (min-width: ${PC_SIZE}) {
      width: 1040px;
    }
  `,
  whiteLinkButton: `
    ${LINK_BUTTON};
    color: white;
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid white;
    &:hover {
      background-color: white;
      color: black; 
    }
  `
}