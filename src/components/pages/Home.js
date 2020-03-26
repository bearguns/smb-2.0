import React from "react";
import styled from "styled-components";
import Page from "../common/Page.js";
import Headshot from "../Headshot.js";
import Heading from "../common/Heading.js";
import AboutBanner from "../home/AboutBanner.js";
import WorkBanner from "../home/WorkBanner.js";
export default function HomePage(props) {
  return (
    <Page>
      <Headshot />
      <AboutBanner />
      <WorkBanner />
    </Page>
  );
}
