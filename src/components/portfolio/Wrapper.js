import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background-color: ${props => props.theme.colors.black};
  grid-column: ${props => props.columnSpan};
  padding: 27px;
  @media screen and (max-width: 1024px) {
    grid-column: 1 / -1;
    padding: 15px;
  }
`;

export default function ContentWrapper(props) {
  const { column } = props;
  const columnSpan = {
    left: "1 / 4",
    right: "4 / 7",
    full: "1 / 1"
  }[columns];
}
