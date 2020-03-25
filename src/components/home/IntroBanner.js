import React from "react";
import Heading from "../common/Heading.js";

export default function IntroBanner(props) {
  const { theme } = props;
  return (
    <Heading level={1} theme={theme}>
      I'm Sean Brage
    </Heading>
  );
}
