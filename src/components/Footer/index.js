import React from "react";
import {
  FooterContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterLink,
} from "./FooterElements";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksWrapper>
        <FooterLink
          to="home"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          Home
        </FooterLink>
        <FooterLink
          to="statistics"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          Statistics
        </FooterLink>
        <FooterLink
          to="documentation"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          Documentation
        </FooterLink>
        <FooterLink
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          About
        </FooterLink>
        <FooterLink
          to="map"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          Crime Map
        </FooterLink>
      </FooterLinksWrapper>
      <FooterLinkTitle>© 2020 CrimeSurge</FooterLinkTitle>
    </FooterContainer>
  );
};

export default Footer;
