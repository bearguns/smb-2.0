import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading from "../common/Heading.js";
import slideInFromBottom from "../../animations/slide-in-from-bottom.js";
const Wrapper = styled.section`
  transform: translateX(-100%);
  animation: ${slideInFromBottom} 0.5s ease-in-out 0.75s 1;
  animation-fill-mode: forwards;
  background-color: ${props => props.theme.colors.black};
  grid-column: 1 / -1;
  grid-row: span 3;
  padding: 27px;
  @media screen and (max-width: 812px) {
    padding: 15px;
    grid-row: span 3;
  }
  margin-bottom: 15px;
`;

const ListWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const ListItem = styled.li`
  list-style: square;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.lightGray};
  font-family: "Fira Code", sans-serif;
  font-weight: 400;
  margin-left: 57px;
  @media screen and (max-width: 1024px) {
    font-size: 1.25rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0px 15px;
  margin-left: -48px;
  flex-wrap: wrap;
  max-height: 224px;
  @media screen and (max-width: 768px) {
    flex-grow: 0;
    flex-wrap: nowrap;
    margin: 0px 0px 0px -48px;
  }
`;

export default function BuiltWithBanner() {
  const techStack = [
    "react",
    "styled-components",
    "css grid",
    "flexbox",
    "fontawesome",
    "figma",
    "emacs",
    "coffee",
    "apple music",
    "the loving and steadfast support of a wonderful wife",
    "super mario maker 2 breaks with the kids"
  ];
  return (
    <Wrapper>
      <Heading level={1}>
	<FontAwesomeIcon icon={["fal", "laptop-code"]} />
      </Heading>
      <Heading level={2}>Built With:</Heading>
      <ListWrapper>
	<List>
	  {techStack.map(t => (
	    <ListItem key={t}>{t}</ListItem>
	  ))}
	</List>
      </ListWrapper>
    </Wrapper>
  );
}
