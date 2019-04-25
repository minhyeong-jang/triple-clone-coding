import React, { Component } from "react";
import Router from "next/router";

export default class extends Component {
  componentDidMount() {
    Router.push("/intro");
	}
	render(){
		return <div>Redirect Intro</div>
	}
}
