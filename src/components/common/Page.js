import React from "react";
import styled from "styled-components";

const View = styled.section`
  margin: 0px auto;
  display: grid;
  height: 100%;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 428px);
  grid-column-gap: 12px;
  grid-row-gap: 96px;
  padding-bottom: 27px;
  @media screen and (max-width: 1157px) {
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 100px;
  }

  @media screen and (max-width: 812px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default function Page({ children }) {
  return <View>{children}</View>;
}
