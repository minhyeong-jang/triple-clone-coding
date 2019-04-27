import * as React from "react";
import { NextFunctionComponent, NextContext } from "next";
import HeadingSection from "@components/HeadingSection";
import BoastSection from "@components/BoastSection";

type Props = {
  pathname: string
};
const Intro: NextFunctionComponent<Props> = ({ pathname }) => (
  <div>
    <HeadingSection />
    <BoastSection />
  </div>
);

Intro.getInitialProps = ({ pathname }: NextContext) => {
  return { pathname };
};

export default Intro;
