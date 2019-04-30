import React, {useEffect} from "react";
import Router from "next/router";

type Props = {};
const Index: React.FunctionComponent<Props> = () => {
  useEffect(() => {
    Router.push("/intro", process.env.BACKEND_URL + "/intro");
  });
  return <div />;
};

export default Index;
