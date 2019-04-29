import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: rgb(250, 250, 250);
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 13px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px -6px 9px 0px inset;
  border-radius: 48px;
  &::after {
    position: absolute;
    top: 0;
    width: 162px;
    height: 38px;
    left: 50%;
    margin-left: -81px;
    border-radius: 18px;
    background-color: rgb(250, 250, 250);
    content: "";
  }
`;
const PhoneScreen = styled.div<{imageUrl: string}>`
  width: 300px;
  height: 650px;
  background-size: cover;
  border-radius: 33px;
  background-image: url(${props => props.imageUrl});
`;

interface Props {
  imageUrl: string;
}
const PhoneFrame: React.FunctionComponent<Props> = ({ imageUrl }) => {
  return (
    <Container>
      <PhoneScreen imageUrl={imageUrl} />
    </Container>
  );
};

export default PhoneFrame;
