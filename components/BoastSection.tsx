import React, { useState } from "react";
import styled from "styled-components";
import CountUp from "react-countup";

import ReponsiveLayout from "@components/common/ReponsiveLayout";

const ContentLogo = styled.div`
  position: absolute;
  top: 150px;
  width: 400px;
  height: 338px;
  padding-top: 280px;
  font-size: 15px;
  background-image: url(${require("../static/images/img-02-triple@3x.png")});
  background-size: cover;
  text-align: center;
  color: ${props => props.theme.lightBlackColor};
`;
const MetricsContainer = styled.div`
  position: absolute;
  top: 150px;
  right: 160px;
  animation-delay: 0.1s;
`;
const MetricItem = styled.div`
  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
  color: ${props => props.theme.blackColor};
`;
const AwardsContainer = styled.div`
  position: absolute;
  bottom: 140px;
  right: 10px;
  animation-delay: 0.2s;
`;
const AwardItem = styled.div`
  display: inline-block;
  color: ${props => props.theme.regularBlackColor};
  font-weight: bold;
  background-repeat: no-repeat;
  background-size: 54px 54px;
  line-height: 22px;
  padding: 5px 0px 5px 62px;
  &:not(:last-child) {
    margin-right: 39px;
  }
`;

interface Props {}
const BoastSection: React.FunctionComponent<Props> = () => {
  const [active, setActive] = useState(false);
  return (
    <ReponsiveLayout
      layoutClass="boast"
      onWaypoint={active => setActive(active)}
    >
      <ContentLogo className="fadeInUp">2019년 4월 기준</ContentLogo>
      {active ? (
        <MetricsContainer className="fadeInUp">
          <MetricItem>
            <strong>
              <CountUp start={1} end={360} separator="," />만 명
            </strong>
            의 사용자
          </MetricItem>
          <MetricItem>
            <strong>
              <CountUp start={1} end={35} separator="," />만 명
            </strong>
            의 리뷰
          </MetricItem>
          <MetricItem>
            <strong>
              <CountUp start={1} end={1100} separator="," />만 명
            </strong>
            의 저장
          </MetricItem>
        </MetricsContainer>
      ) : null}
      <AwardsContainer className="fadeInUp">
        <AwardItem
          style={{
            backgroundImage: `url(${require("../static/images/img-02-badge-google@3x.png")}`
          }}
        >
          2018 구글 플레이스토어
          <br />
          올해의 앱 최우수상 수상
        </AwardItem>
        <AwardItem
          style={{
            backgroundImage: `url(${require("../static/images/img-02-badge-apple@4x.png")}`
          }}
        >
          2018 애플 앱스토어
          <br />
          오늘의 여행앱 선정
        </AwardItem>
      </AwardsContainer>
    </ReponsiveLayout>
  );
};

export default BoastSection;
