import React from "react";
import styled from "styled-components";

type Props = {
  title?: string;
};

const Container = styled.div`
  position: relative;
  background-image: url('/static/images/img-01-bg.png');
  background-size: 100% 100%;
`;
const Section = styled.div`
  width: 1040px;
  height: 860px;
`;

const HeadingSection: React.FunctionComponent<Props> = () => {
  return <Container>
    <Section></Section>
  </Container>;
};

export default HeadingSection;
