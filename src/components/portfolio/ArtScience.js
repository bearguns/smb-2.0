import React from "react";
import Block from "../layout/Block.js";
import Heading from "../common/Heading.js";
import Text from "../common/Text.js";
import Screenshot from "./Screenshot.js";
import TechList from "./TechList.js";
import PortfolioLink from "./PortfolioLink.js";
import PortfolioLinks from "./PortfolioLinks.js";

export default function SeanBrage() {
  const bullets = ["html5", "firebase", "css custom properties", "typekit"];
  return (
    <Block columns={"right"} rows={5} appear={"right"} delay={".5s"}>
      <Screenshot image={"art-science-grab.png"} />
      <Heading level={2}>art & science staffing</Heading>
      <Heading level={3}>one-pager / contract work</Heading>
      <PortfolioLinks>
	<PortfolioLink
	  url="https://art-science-one-page.firebaseapp.com"
	  icon={["fal", "browser"]}
	>
	  see it live
	</PortfolioLink>
      </PortfolioLinks>
      <Heading level={4}>built with:</Heading>
      <TechList bullets={bullets} />
      <Text>
	A simple intro page for a top-tier recruitment agency in Portland.
	Straightforward, comfy, and inviting. Like a great easy chair, if your
	easy chair recruited and staffed some of the world's best developers for
	some of the world's best companies.
      </Text>
    </Block>
  );
}
