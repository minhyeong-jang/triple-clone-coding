import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
  z-index: 1;
  padding: 83px 50px 17px;
`;

const Logo = styled.a`
  display: inline-block;
  background-image: url("/static/images/img-main-logo-white@3x.png");
  vertical-align: top;
  background-repeat: no-repeat;
  z-index: 1;
  width: 77px;
  height: 25px;
  background-size: 77px 25px;
`;

const LinkContainer = styled.div`
  float: right;
  a {
    display: inline-block;
    font-family: sans-serif;
    color: rgb(255, 255, 255);
    font-weight: 500;
    height: 100%;
    text-decoration: none;
    margin: 0px 0px 0px 34px;
    font-size: 17px;
  }
`;

const Header = () => {
  return (
    <Container>
      <Logo />
      <LinkContainer>
        <a>Triple Team</a>
        <a>Contact</a>
      </LinkContainer>
    </Container>
  );
};

export default Header;
