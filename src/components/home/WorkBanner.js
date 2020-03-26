import React from "react";
import styled from "styled-components";
import Heading from "../common/Heading.js";
import Text from "../common/Text.js";

const Wrapper = styled.section`
  background-color: ${props => props.theme.colors.background};
  grid-column: 4 / 7;
  padding: 27px;
  @media screen and (max-width: 812px) {
    grid-column: 1 / -1;
    padding: 15px;
  }
`;

export default function WorkBanner(props) {
  const { theme } = props;
  return (
    <Wrapper>
      <Heading level={1}>My Work</Heading>
      <Text>
	Examples of my work are available on the portfolio page of this site. I
	also have an active profile on GitHub where you can see everything I've
	been up to. I'm constantly learning new things, experimenting, and
	hacking on my Emacs configuration because...well, if you read the
	headline you know I'm a huge dork.
      </Text>
    </Wrapper>
  );
}
