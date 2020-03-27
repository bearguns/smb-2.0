import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-top: 8px;
  margin-top: 12px;
  & > :not(:first-child) {
    margin-left: 24px;
  }
`;

const PortfolioLinks = props => <Wrapper>{props.children}</Wrapper>;

export default PortfolioLinks;
