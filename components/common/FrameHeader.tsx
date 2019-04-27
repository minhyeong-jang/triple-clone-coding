import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
  z-index: 1;
`;

const Header = () => {
  return (
    <Container>
      <Link href="/"><a>홈</a></Link>
    </Container>
  );
};

export default Header;