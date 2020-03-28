import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Block from "../layout/Block.js";
import Heading from "../common/Heading.js";
import Text from "../common/Text.js";

const Link = styled.a`
  color: ${props => props.theme.colors.red};
  font-size: 2rem;
  margin-top: 27px;
  width: 100%;
  display: block;
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
    width: 100%;
  }
`;

export default function ContactInfo() {
  return (
    <Block columns={"left"} appear={"left"} delay={".5s"} rows={4}>
      <Heading level={1}>contact me</Heading>
      <Text>
	I'd love to hear from you if you're a recruiter with a sweet gig, an
	employer looking to build an awesome team, or a developer trying to
	level up your skills and abilities. <br />
	<br />
	Seriously, reach out. I'd love to talk to you about working together. Or
	answer questions you might have about web development. Or play Dungeons
	& Dragons. Or start an ambient post-rock band. Seriously, don't be a
	stranger.
      </Text>
      <Link href="mailto:iamseanbrage@gmail.com">
	<FontAwesomeIcon icon={["fal", "envelope"]} />
	<Heading level={4}>iamseanbrage@gmail.com</Heading>
      </Link>
      <Link href="https://linkedin.com/in/seanmbrage" target="_blank">
	<FontAwesomeIcon icon={["fab", "linkedin"]} />
	<Heading level={4}>linkedin.com/in/seanmbrage</Heading>
      </Link>
    </Block>
  );
}
