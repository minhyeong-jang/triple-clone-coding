import React, { useState, useEffect } from "react";
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
  opacity: 0;
  border-bottom: 1px solid rgb(239, 239, 239);
  transform: translateY(-20%);
  transition: all 400ms ease-in-out 0s;
  &.active {
    opacity: 1;
    transform: translateY(0%);
  }
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
const ExtraActionsContainer = styled.ul`
  position: absolute;
  right: 0px;
  top: 0px;
  bottom: 0px;
  padding-right: 50px;
`;
const ExtraActionItem = styled.li`
  line-height: 80px;
  font-size: 17px;
  height: 80px;
  margin: 0px 0px 0px 34px;
  color: ${props => props.theme.regularBlackColor};
  display: inline-block;
  cursor: pointer;
`;

interface Props {}
const FrameHeader: React.FunctionComponent<Props> = () => {
  const [active, setActive] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 125) {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Container className={active ? "active" : ""}>
      <Link href="/intro">
        <Logo />
      </Link>
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

export default FrameHeader;
