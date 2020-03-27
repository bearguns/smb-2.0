import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading from "../common/Heading.js";
import Text from "../common/Text.js";
import WorkIcons from "./WorkIcons.js";
import slideInFromRight from "../../animations/slide-in-from-right.js";

const Wrapper = styled.section`
  transform: translateX(100%);
  animation: ${slideInFromRight} 0.15s ease-in-out 0.75s 1;
  animation-fill-mode: forwards;
  background-color: ${props => props.theme.colors.black};
  grid-column: 4 / 7;
  grid-row: span 3;
  padding: 15px 27px;
  @media screen and (max-width: 1024px) {
    grid-column: 1 / -1;
    grid-row: span 3;
    padding: 15px;
  }
`;

export default function WorkBanner() {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}
