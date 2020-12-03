import React from "react";
import {
  DocContainer,
  DocWrapper,
  DocCard,
  DocH1,
  DocH2,
  DocP,
  DocIcon,
} from "./DocumentationElements";

import Icon1 from "../../images/icon1.svg";
import Icon2 from "../../images/icon2.svg";
import Icon3 from "../../images/icon3.svg";

const Documentation = () => {
  return (
    <DocContainer id="documentation">
      <DocH1>Documentation</DocH1>
      <DocWrapper>
        <DocCard>
          <DocIcon src={Icon1} />
          <DocH2>View Source Code</DocH2>
          <DocP>Stuff will go here</DocP>
        </DocCard>
        <DocCard>
          <DocIcon src={Icon2} />
          <DocH2>User Manual</DocH2>
          <DocP>Manual will go here</DocP>
        </DocCard>
        <DocCard>
          <DocIcon src={Icon3} />
          <DocH2>Developer Manual</DocH2>
          <DocP>Manual will go here</DocP>
        </DocCard>
      </DocWrapper>
    </DocContainer>
  );
};

export default Documentation;
