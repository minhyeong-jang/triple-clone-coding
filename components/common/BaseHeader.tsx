import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  min-width: 1200px;
  z-index: 2;
  padding: 83px 50px 17px;
`;
const Logo = styled.div`
  display: inline-block;
  background-image: url(${require("../../static/images/img-main-logo-white@3x.png")});
  width: 77px;
  height: 25px;
  background-size: 77px 25px;
  cursor: pointer;
`;
const LinkContainer = styled.div`
  float: right;
  span {
    display: inline-block;
    color: #fff;
    font-weight: 500;
    margin: 0px 0px 0px 34px;
    font-size: 17px;
    cursor: pointer;
  }
`;

interface Props {}
const Header: React.FunctionComponent<Props> = () => {
  return (
    <Container>
      <Link href="/intro" as={ process.env.BACKEND_URL + '/intro'}>
        <Logo />
      </Link>
      <LinkContainer>
        <Link href="/intro" as={ process.env.BACKEND_URL + '/intro'}>
          <span>Triple Team</span>
        </Link>
        <Link href="/intro" as={ process.env.BACKEND_URL + '/intro'}>
          <span>Contact</span>
        </Link>
      </LinkContainer>
    </Container>
  );
};

export default Header;
