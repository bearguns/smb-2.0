import React from "react";
import Page from "../layout/Page.js";
import Intro from "../portfolio/Intro.js";
import SeanBrage from "../portfolio/SeanBrage.js";
import Pokedex from "../portfolio/Pokedex.js";
import ArtScience from "../portfolio/ArtScience.js";

export default function Portfolio() {
  return (
    <Page>
      <Intro />
      <ArtScience />
      <Pokedex />
      <SeanBrage />
    </Page>
  );
}
