import React from "react";
import styled from "styled-components";

const View = styled.section`
  margin: auto;
  max-width: 1128px;
  display: grid;
  grid-template-columns: repeat(6, 200px);
  grid-template-rows: repeat(6, 428px);
  grid-column-gap: 12px;
  grid-row-gap: 128px;
`;

export default function Page({ children }) {
  return <View>{children}</View>;
}
