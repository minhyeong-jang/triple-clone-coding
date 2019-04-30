import React from "react";
import styled from "styled-components";

import ReponsiveLayout from "@components/common/ReponsiveLayout";

const Heading = styled.div`
  position: absolute;
  top: 240px;
  letter-spacing: -1px;
  margin: 0px;
  color: rgb(58, 58, 58);
  animation-delay: 0.3s;
  h2 {
    font-weight: 500;
    line-height: 1.31;
    font-size: 52px;
  }
  div {
    font-size: 17px;
    line-height: 1.76;
    letter-spacing: -0.3px;
    margin: 20px 0px 0px;
  }
`;
const ImageList = styled.div`
  img {
    position: absolute;
  }
  img:nth-child(1) {
    width: 160px;
    height: 160px;
    top: 343px;
    right: 438px;
    animation-delay: 0.7s;
  }
  img:nth-child(2) {
    width: 140px;
    height: 140px;
    top: 182px;
    right: 315px;
    animation-delay: 0.65s;
  }
  img:nth-child(3) {
    width: 200px;
    height: 200px;
    top: 151px;
    right: 51px;
    animation-delay: 0.5s;
  }
  img:nth-child(4) {
    width: 150px;
    height: 150px;
    top: 173px;
    right: -142px;
    animation-delay: 0.75s;
  }
  img:nth-child(5) {
    width: 200px;
    height: 200px;
    top: 346px;
    right: 204px;
    animation-delay: 0.6s;
  }
  img:nth-child(6) {
    width: 220px;
    height: 220px;
    top: 368px;
    right: -67px;
    animation-delay: 0.75s;
  }
  img:nth-child(7) {
    width: 200px;
    height: 200px;
    top: 323px;
    right: -300px;
    animation-delay: 0.65s;
  }
  img:nth-child(8) {
    width: 130px;
    height: 130px;
    top: 523px;
    right: 554px;
    animation-delay: 0.75s;
  }
  img:nth-child(9) {
    width: 170px;
    height: 170px;
    top: 561px;
    right: 339px;
    animation-delay: 0.65s;
  }
  img:nth-child(10) {
    width: 200px;
    height: 200px;
    top: 577px;
    right: 90px;
    animation-delay: 0.8s;
  }
  img:nth-child(11) {
    width: 170px;
    height: 170px;
    top: 568px;
    right: -200px;
    animation-delay: 0.6s;
  }
  img:nth-child(12) {
    width: 120px;
    height: 120px;
    top: 717px;
    right: -42px;
    animation-delay: 0.8s;
  }
`;

interface Props {}
const CountrySection: React.FunctionComponent<Props> = () => {
  return (
    <ReponsiveLayout containerClass="country">
      <Heading className="fadeInUp">
        <h2>
          세계 120개 도시
          <br />
          무료 가이드
        </h2>
        <div>
          여행마다 매번 사야 했던 가이드북
          <br />
          이제 무료로 보는 트리플 가이드로
          <br />
          보다 자세하게, 깔끔하게
        </div>
      </Heading>
      <ImageList>
        <img className="fadeInUp" src={require("../static/images/img-03-newyork@3x.png")} />
        <img className="fadeInUp" src={require("../static/images/img-03-vladivostok@3x.png")} />
        <img className="fadeInUp" src={require("../static/images/img-03-rome@3x.png")} />
        <img className="fadeInUp" src={require("../static/images/img-03-sydney@3x.png")} />
        <img className="fadeInUp" src={require("../static/images/img-03-sapporo@3x.png")} />
        <img className="fadeInUp" src={require("../static/images/img-03-tokyo@3x.png")} />
        <img className="fadeInUp" src={require("../static/images/img-03-osaka@3x.png")} />
        <img className="fadeInUp" src={require("../static/images/img-03-laos@3x.png")} />
        <img className="fadeInUp" src={require("../static/images/img-03-paris@3x.png")} />
        <img className="fadeInUp" src={require("../static/images/img-03-london@3x.png")} />
        <img className="fadeInUp" src={require("../static/images/img-03-budapest@3x.png")} />
        <img className="fadeInUp" src={require("../static/images/img-03-melbourne@3x.png")} />
      </ImageList>
    </ReponsiveLayout>
  );
};

export default CountrySection;
