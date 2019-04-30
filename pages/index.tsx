import React, { Component } from "react";
import Router from "next/router";

export default class extends Component {
  componentDidMount() {
		console.log(process.env.BACKEND_URL);
    Router.push("/intro", process.env.BACKEND_URL + '/intro');
  }
  render() {
    return <div>Redirect Intro</div>;
  }
}
