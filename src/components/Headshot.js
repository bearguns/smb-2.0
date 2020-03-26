import React from "react";
import styled from "styled-components";
import Heading from "./common/Heading.js";
const Image = styled.img`
  height: auto;
  clip-path: circle(132px at center);
  margin: 0 auto;
  @media screen and (max-width: 812px) {
    clip-path: circle(124px at center);
  }
  margin-bottom: 12px;
`;

const Wrapper = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 15px;
  & ${Heading} {
    text-align: center;
  }
`;

export default function Headshot(props) {
  return (
    <Wrapper>
      <Image src={"headshot_cropped.jpg"} />
      <Heading level={5}>
	Experienced web developer / JavaScript engineer / husband / dad /
	musician / gigantic dork living on the outskirts of Denver, CO.
      </Heading>
    </Wrapper>
  );
}
