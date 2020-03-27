import React from "react";
import Block from "../layout/Block.js";
import Heading from "../common/Heading.js";
import Text from "../common/Text.js";
import Screenshot from "./Screenshot.js";
import TechList from "./TechList.js";
import PortfolioLink from "./PortfolioLink.js";
import PortfolioLinks from "./PortfolioLinks.js";

export default function SeanBrage() {
  const bullets = ["react", "styled-components", "css grid", "now.sh"];
  return (
    <Block columns={"right"} rows={6} appear={"right"} delay={".5s"}>
      <Screenshot image={"sbdc_grab.png"} />
      <Heading level={2}>seanbrage.com</Heading>
      <Heading level={3}>personal site / portfolio</Heading>
      <PortfolioLinks>
	<PortfolioLink
	  url="https://github.com/bearguns/smb-2.0"
	  icon={["fab", "github"]}
	>
	  view on github
	</PortfolioLink>
	<PortfolioLink url="https://seanbrage.com" icon={["fal", "browser"]}>
	  see it live
	</PortfolioLink>
      </PortfolioLinks>
      <Heading level={4}>built with:</Heading>
      <TechList bullets={bullets} />
      <Text>
	That's right - this very website was in fact built with code. I know, it
	sounds like science fiction, but I assure you it's true. Designed to
	showcase my coding skills, as well as highlight a little taste of my
	personality and what I bring to the table. Fluid, playful, and
	professional. Oh, and the website ain't bad either.
      </Text>
    </Block>
  );
}
