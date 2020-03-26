import React from "react";
import styled from "styled-components";
import Heading from "../common/Heading.js";
import Text from "../common/Text.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.section`
  background-color: ${props => props.theme.colors.background};
  grid-column: 1 / 4;
  padding: 27px;
  @media screen and (max-width: 1024px) {
    grid-column: 1 / -1;
    padding: 15px;
  }
`;

export default function AboutBanner(props) {
  const { theme } = props;
  return (
    <Wrapper>
      <Heading level={1}>
	<FontAwesomeIcon icon={["fal", "compass"]} />
      </Heading>
      <Heading level={2}>About Me</Heading>
      <Text>
	From production single-page-apps for a major phone service provider, to
	progressive VueJS enhancements in legacy Jinja templates; I've been
	everywhere, man. After a long career as an IT network consultant, I went
	for broke pursuing full-time web development and never looked back.
	<br />
	<br />I specialize in writing web applications in VueJS, RESTful APIs in
	Node and Python, and have been known to spin up the occasional GraphQL
	server for fun and profit. Above all, I like solving problems and
	building cool $*!%.
      </Text>
    </Wrapper>
  );
}
