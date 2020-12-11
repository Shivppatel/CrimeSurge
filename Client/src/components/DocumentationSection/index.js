import React from "react";
import {
  DocContainer,
  DocWrapper,
  DocCard,
  DocH1,
  DocH2,
  DocP,
  DocIcon,
  Link,
} from "./DocumentationElements";

import Icon1 from "../../images/icon1.svg";
import Icon2 from "../../images/icon2.svg";
import Icon3 from "../../images/icon3.svg";

const Documentation = () => {
  return (
    <DocContainer id="documentation">
      <DocH1>Documentation</DocH1>
      <DocWrapper>
        <Link
          href="https://github.com/Shivppatel/PGC-Crime-Map"
          target="_blank"
        >
          <DocCard>
            <DocIcon src={Icon1} />
            <DocH2>View Source Code</DocH2>
            <DocP>
              Want to see the code? Don't worry we got a repo for that!
            </DocP>
          </DocCard>
        </Link>
        <Link href="https://github.com/Shivppatel/PGC-Crime-Map/blob/main/UserManual.md"
              target="_blank"
              >
          <DocCard>
            <DocIcon src={Icon2} />
            <DocH2>User Manual</DocH2>
            <DocP>
              Need help using our application? Don't worry we got docs for that!
            </DocP>
          </DocCard>
        </Link>
        <Link href="https://github.com/Shivppatel/PGC-Crime-Map/blob/main/DevManual.md"
              target="_blank"
              >
          <DocCard>
            <DocIcon src={Icon3} />
            <DocH2>Developer Manual</DocH2>
            <DocP>
              Need help using our API? Don't worry we got docs for that!{" "}
            </DocP>
          </DocCard>
        </Link>
      </DocWrapper>
    </DocContainer>
  );
};

export default Documentation;
