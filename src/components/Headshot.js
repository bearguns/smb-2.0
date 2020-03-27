import React from "react";
import styled from "styled-components";
import Heading from "./common/Heading.js";
import fadeIn from "../animations/fade-in.js";

const Image = styled.img`
  height: auto;
  clip-path: circle(110px at center);
  margin: 0 auto;
  @media screen and (min-width: 812px) {
    clip-path: circle(70px at center);
  }
  margin-bottom: 12px;
`;

const Wrapper = styled.div`
  opacity: 0;
  animation: ${fadeIn} 0.5s linear 0.25s 1;
  animation-fill-mode: forwards;
  grid-column: 1 / -1;
  grid-row: span 2;
  @media screen and (max-width: 768px) {
    grid-row: span 3;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 15px;
  & h3 {
    text-align: center;
    @media screen and (max-width: 812px) {
      font-size: 1.5rem;
    }
  }
`;

export default function Headshot(props) {
  return (
    <Wrapper>
      <Image src={"headshot_cropped.jpg"} />
      <Heading level={3}>
	Experienced web developer / JavaScript engineer / husband / dad /
	musician / gigantic dork living on the outskirts of Denver, CO
      </Heading>
    </Wrapper>
  );
}
