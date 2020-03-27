import React from "react";
import Block from "../layout/Block.js";
import Heading from "../common/Heading.js";
import Text from "../common/Text.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AboutBanner() {
  return (
    <Block appear={"left"} columns={"left"} delay=".75s" rows={3}>
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
    </Block>
  );
}
