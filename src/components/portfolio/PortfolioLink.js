import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading from "../common/Heading.js";

const Link = styled.a`
  color: ${props => props.theme.colors.red};
  cursor: pointer;
  text-decoration: none;

  &:after {
    content: "";
    display: inline-block;
    height: 2px;
    width: 0px;
    border-bottom: 2px solid;
    border-color: ${props => props.theme.colors.red};
    transition: width 0.2s ease-in-out;
  }

  &:hover:after {
    width: 100%;
  }
`;

export default function PortfolioLink(props) {
  const { icon, children, url } = props;
  return (
    <Link href={url} target="_blank">
      <FontAwesomeIcon icon={icon} />
      <Heading level={5}>{children}</Heading>
    </Link>
  );
}
