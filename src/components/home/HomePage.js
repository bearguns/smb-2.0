import React from "react";
import styled from "styled-components";
import IntroBanner from "./IntroBanner.js";

const Page = styled.div`
  padding: 27px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
export default function HomePage(props) {
  return (
    <Page>
      <IntroBanner></IntroBanner>
    </Page>
  );
}
