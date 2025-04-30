import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>
      The Sacred Souls fall into the genre of retro-soul or modern soul,
      often described more specifically as Chicano soul, sweet soul,
      or Southern California soul. Their music blends elements of classic
      1960s and 70s soul with contemporary production and a laid-back West Coast vibe.
      They’re known for their smooth vocals, vintage instrumentation, and heartfelt lyrics,
      drawing comparisons to artists like The Delfonics, Curtis Mayfield, and Al Green,
      while also resonating with fans of labels like Daptone Records or Colemine Records.
      </p>
      <img src={image} alt="I made this"></img>
    </div>
  )
}

export default About;
