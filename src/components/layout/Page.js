import React from "react";
import styled from "styled-components";

const View = styled.section`
  margin: 0px auto;
  display: grid;
  min-height: 100vh;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(12, 100px);
  grid-column-gap: 12px;
  grid-row-gap: 64px;
  padding-bottom: 47px;
  @media screen and (max-width: 1157px) {
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 100px;
  }

  @media screen and (max-width: 812px) {
    padding-top: 64px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(12, 87px);
  }
`;

export default function Page({ children }) {
  return <View>{children}</View>;
}
