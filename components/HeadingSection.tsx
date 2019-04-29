import React from "react";
import styled from "styled-components";

import ReponsiveLayout from "@components/common/ReponsiveLayout";
import PhoneFrame from "@components/common/PhoneFrame";

const HeadingContent = styled.div`
  position: absolute;
  top: 220px;
`;
const Heading = styled.h1`
  font-size: 100px;
  line-height: 1.1;
  letter-spacing: -3px;
  font-weight: bold;
  color: white;
  margin: 0px 0px 0px -4px;
`;
const SubHeading = styled.p`
  font-size: 17px;
  line-height: 2;
  margin: 18px 0px 0px 1px;
  color: white;
`;
const AppButton = styled.a`
  ${props => props.theme.whiteLinkButton};
  margin: 76px 0px 0px;
`;
const PhoneContainer = styled.div`
  position: absolute;
  top: 229px;
  right: 0px;
`;

interface Props {}
const HeadingSection: React.FunctionComponent<Props> = () => {
  return (
    <ReponsiveLayout containerClass="heading" layoutClass="heading">
      <HeadingContent>
        <Heading className="fadeInUp">
          어디로
          <br />
          떠나시나요?
        </Heading>
        <SubHeading className="fadeIn">
          여행을 도와드리는 일은 <strong>트리플</strong>이 가장 잘합니다.
        </SubHeading>
        <AppButton
          className="fadeIn"
          href="https://triple.onelink.me/aZP6?pid=intro_web&af_dp=triple%3A%2F%2F%2Fmy%2Fmileage%2Fintro&af_web_dp=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.titicacacorp.triple"
          target="_blank"
        >
          앱 설치하기
        </AppButton>
      </HeadingContent>
      <PhoneContainer className="fadeIn">
        <PhoneFrame imageUrl="/static/images/img-01-screen.jpg" />
      </PhoneContainer>
    </ReponsiveLayout>
  );
};

export default HeadingSection;
