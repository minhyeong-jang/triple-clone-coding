import React from "react";
import { NextFunctionComponent, NextContext } from "next";
import HeadingSection from "@components/HeadingSection";
import BoastSection from "@components/BoastSection";
import CountrySection from "@components/CountrySection";

type Props = {
  pathname: string;
};
const Intro: NextFunctionComponent<Props> = () => {
  return (
    <React.Fragment>
      <HeadingSection />
      <BoastSection />
      <CountrySection />
    </React.Fragment>
)}

Intro.getInitialProps = ({ pathname }: NextContext) => {
  return { pathname };
};

export default Intro;
