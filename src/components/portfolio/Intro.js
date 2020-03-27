import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Block from "../layout/Block.js";
import Heading from "../common/Heading.js";
import Text from "../common/Text.js";

const Link = styled.a`
  color: ${props => props.theme.colors.red};
  cursor: pointer;
  text-decoration: none;

  &:after {
    content: "";
    display: inline-block;
    height: 2px;
    width: 0px;
    border-bottom: 2px solid;
    border-color: ${props => props.theme.colors.red};
    transition: width 0.2s ease-in-out;
  }

  &:hover:after {
    width: 65%;
  }
`;

export default function Intro() {
  return (
    <Block columns={"left"} rows={2} appear={"left"} delay={".25s"}>
      <Heading level={1}>
	<FontAwesomeIcon icon={["fal", "laptop-code"]} />
      </Heading>
      <Heading level={2}>My Work</Heading>
      <Text>
	Some examples of my work are available for you to check out on this
	page. Additionally, I keep an active GitHub profile where you can see
	what I'm learning and working on.
      </Text>
      <Link href="https://github.com/bearguns" target="_blank">
	<Heading level={4}>
	  <FontAwesomeIcon icon={["fab", "github"]} /> View my github profile
	</Heading>
      </Link>
    </Block>
  );
}
