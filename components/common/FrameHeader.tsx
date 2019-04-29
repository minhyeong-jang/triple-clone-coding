import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  z-index: 1;
  background: white;
  height: 80px;
`;
const Logo = styled.a`
  position: absolute;
  top: 50%;
  left: 50px;
  width: 68px;
  height: 24px;
  background-size: cover;
  background-image: url("/static/images/img-intro-logo-dark@2x.png");
  transform: translateY(-50%);
`;
const ExtraActionsContainer = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  bottom: 0px;
  padding-right: 50px;
`;
const ExtraActionItem = styled.a`
  line-height: 80px;
  font-size: 17px;
  height: 80px;
  margin: 0px 0px 0px 34px;
  color: rgba(58, 58, 58, 0.8);
  display: inline-block;
  cursor: pointer;
`;

const Header = () => {
  return (
    <Container>
      <Logo />
      <ExtraActionsContainer>
        <Link href="/">
          <ExtraActionItem>Triple Team</ExtraActionItem>
        </Link>
        <Link href="/">
          <ExtraActionItem>Contact</ExtraActionItem>
        </Link>
      </ExtraActionsContainer>
    </Container>
  );
};

export default Header;
