import * as React from "react";
import { NextFunctionComponent, NextContext } from "next";
import HeadingSection from "@components/HeadingSection";
import Section02 from "@components/section02";

type Props = {
  pathname: string;
  test: string;
};

const Intro: NextFunctionComponent<Props> = ({ pathname, test }) => (
  <div>
    <HeadingSection />
    <Section02 />
  </div>
);

Intro.getInitialProps = async ({ pathname, test }: NextContext) => {
  return { pathname, test };
};

export default Intro;
