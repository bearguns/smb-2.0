import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.div`
  width: 100%;
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  font-size: 2.25rem;
  color: ${props => props.theme.colors.red};

  & svg:not(:first-child) {
    margin-left: 22px;
  }
`;

export default function WorkIcons(props) {
  const { theme } = props;
  const icons = [
    ["fab", "js-square"],
    ["fab", "vuejs"],
    ["fab", "react"],
    ["fab", "css3-alt"],
    ["fab", "html5"],
    ["fab", "sass"],
    ["fab", "python"],
    ["fab", "ubuntu"]
  ];

  return (
    <Wrapper>
      {icons.map(icon => (
	<FontAwesomeIcon icon={icon} key={icon[1]} />
      ))}
    </Wrapper>
  );
}
