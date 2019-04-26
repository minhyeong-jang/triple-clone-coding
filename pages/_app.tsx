import React from "react";
import App, { Container } from "next/app";
import BaseHeader from "@components/common/BaseHeader";
import GlobalStyled from "@styles/GlobalStyled";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <GlobalStyled />
        <BaseHeader />
        <Component {...pageProps} />
      </Container>
    );
  }
}
