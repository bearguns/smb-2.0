import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 400px;
  height: auto;
  border: 2px solid;
  border-color: ${props => props.theme.colors.red};
  border-radius: 3px;
  @media screen and (max-width: 812px) {
    width: 300px;
    margin: 0 auto;
  }
`;

export default function Screenshot(props) {
  const { image } = props;

  return <Image src={image} />;
}
