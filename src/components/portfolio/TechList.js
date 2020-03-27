import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
  color: ${props => props.theme.colors.lightGray};
  list-style: square;
  font-family: "Noto Sans", sans-serif;
`;

const List = styled.ul`
  padding: 0px 15px;
`;

export default function TechList(props) {
  const { bullets } = props;
  return (
    <List>
      {bullets.map(bullet => (
	<ListItem key={bullet}>{bullet}</ListItem>
      ))}
    </List>
  );
}
