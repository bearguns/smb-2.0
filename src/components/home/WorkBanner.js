import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Block from "../layout/Block.js";
import Heading from "../common/Heading.js";
import Text from "../common/Text.js";
import WorkIcons from "./WorkIcons.js";

export default function WorkBanner() {
  return (
    <Block columns={"right"} appear={"right"} rows={3} delay={".75s"}>
      <Heading level={1}>
	<FontAwesomeIcon icon={["fal", "terminal"]} />
      </Heading>
      <Heading level={2}> My Work</Heading>
      <Text>
	Examples of my work are available on the portfolio page of this site. I
	also have an active profile on GitHub where you can see everything I've
	been up to. I'm constantly learning new things, experimenting, and
	hacking on my Emacs configuration because...well, if you read the
	headline you know I'm a huge dork.
      </Text>
      <Heading level={4}>Proficiencies:</Heading>
      <WorkIcons />
    </Block>
  );
}
