import React from "react";
import Page from "../common/Page.js";
import Headshot from "../Headshot.js";
import AboutBanner from "../home/AboutBanner.js";
import WorkBanner from "../home/WorkBanner.js";
import BuiltWithBanner from "../home/BuiltWithBanner.js";

export default function HomePage(props) {
  return (
    <Page>
      <Headshot />
      <AboutBanner />
      <WorkBanner />
      <BuiltWithBanner />
    </Page>
  );
}
