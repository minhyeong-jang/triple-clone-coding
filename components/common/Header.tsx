import React from "react";
import styled from "styled-components";
import Link from "next/link";

const LinkStyle = styled.div`
  margin-right: 1rem;
`;

const Header = () => {
  return (
    <div>
      <Link href="/">
        <LinkStyle>홈</LinkStyle>
      </Link>
    </div>
  );
};

export default Header;