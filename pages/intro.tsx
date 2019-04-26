import * as React from "react";
import { NextFunctionComponent, NextContext } from "next";
import HeadingSection from "@components/HeadingSection";
import Section02 from "@components/section02";

type Props = {
  pathname: string;
};

const Intro: NextFunctionComponent<Props> = ({ pathname }) => (
  <div>
    <HeadingSection />
    <Section02 />
  </div>
);

Intro.getInitialProps = ({ pathname }: NextContext) => {
  return { pathname };
};

export default Intro;
