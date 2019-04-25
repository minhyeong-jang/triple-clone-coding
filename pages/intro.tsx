import * as React from "react";
import { NextFunctionComponent, NextContext } from "next";
import Header from "@components/common/Header";
import Section01 from "@components/section01";
import Section02 from "@components/section02";

type Props = {
  pathname: string;
};

const Intro: NextFunctionComponent<Props> = ({ pathname }) => (
  <div>
    <Header />
    <Section01 />
    <Section02 />
  </div>
);

Intro.getInitialProps = async ({ pathname }: NextContext) => {
  return { pathname };
};

export default Intro;
