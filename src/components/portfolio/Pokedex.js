import React from "react";
import Block from "../layout/Block.js";
import Heading from "../common/Heading.js";
import Text from "../common/Text.js";
import Screenshot from "./Screenshot.js";
import TechList from "./TechList.js";
import PortfolioLink from "./PortfolioLink.js";
import PortfolioLinks from "./PortfolioLinks.js";

export default function Pokedex() {
  const bullets = [
    "react",
    "context API",
    "hooks",
    "sass",
    "css grid",
    "fetch",
    "custom filter system",
    "fuse.js"
  ];
  return (
    <Block columns={"left"} rows={6} appear={"left"} delay={".75s"}>
      <Screenshot image={"pokedex_grab.png"} />
      <Heading level={2}>the react pokedex</Heading>
      <Heading level={3}>coding challenge / fun / pokemon</Heading>
      <PortfolioLinks>
	<PortfolioLink
	  url={"https://github.com/bearguns/react-pokedex"}
	  icon={["fab", "github"]}
	>
	  view on github
	</PortfolioLink>
	<PortfolioLink
	  url={"https://react-pokedex-theta.now.sh"}
	  icon={["fal", "browser"]}
	>
	  see it live
	</PortfolioLink>
      </PortfolioLinks>
      <Heading level={4}>built with:</Heading>
      <TechList bullets={bullets} />
      <Text>
	Part coding challenge, part "why not, it's Pokemon for crying out
	loud!". The React Pokedex is responsive, complex, and downright handy to
	have around - much like the very Pokemon that inspired it.
      </Text>
    </Block>
  );
}
