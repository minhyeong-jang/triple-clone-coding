import React from "react";
import Head from "next/head";
import App, { Container } from "next/app";
import BaseHeader from "@components/common/BaseHeader";
import FrameHeader from "@components/common/FrameHeader";
import GlobalStyled from "@styles/GlobalStyled";
import Theme from "@styles/Theme";
import { ThemeProvider } from "styled-components";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={Theme}>
        <Container>
          <Head>
            <title>Triple Clone</title>
          </Head>
          <GlobalStyled />
          <BaseHeader />
          <FrameHeader />
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    );
  }
}
