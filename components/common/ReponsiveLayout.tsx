import React, { useState } from "react";
import styled from "styled-components";
import { Waypoint } from "react-waypoint";

const Container = styled.div`
  ${props => props.theme.container};
  &.heading {
    background-image: url("/static/images/img-01-bg.png");
  }
`;
const Layout = styled.div`
  ${props => props.theme.responsiveLayout};
  &.heading {
    height: 860px;
  }
  &.boast {
    height: 573px;
  }
  &.default {
  }
`;

interface Props {
  containerClass?: string;
  layoutClass?: string;
  onWaypoint?: (active: boolean) => void;
  children: object;
}
const ReponsiveLayout: React.FunctionComponent<Props> = ({
  containerClass,
  layoutClass,
  children,
  onWaypoint
}) => {
  const [waypointEnter, setWaypointEnter] = useState(false);
  return (
    <Container
      className={`${containerClass || "default"} ${
        waypointEnter ? "animation-active" : ""
      }`}
    >
      <Waypoint
        topOffset={"30%"}
        onEnter={() => {
          if (onWaypoint) onWaypoint(true);
          setWaypointEnter(true);
        }}
      >
        <Layout className={layoutClass || "default"}>{children}</Layout>
      </Waypoint>
    </Container>
  );
};

export default ReponsiveLayout;
