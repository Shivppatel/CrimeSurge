import React from "react";
import {FooterContainer, FooterLinksWrapper, FooterLinkTitle, FooterLink} from './FooterElements'
const Footer = () => {
  return (
    <FooterContainer>
        <FooterLinksWrapper>
          <FooterLink to="home">Home</FooterLink>
          <FooterLink to="statistics">Statistics</FooterLink>
          <FooterLink to="documentation">Documentation</FooterLink>
          <FooterLink to="about">About</FooterLink>
          <FooterLink to="map">Crime Map</FooterLink>
        </FooterLinksWrapper>
        <FooterLinkTitle>© 2020 CrimeSurge</FooterLinkTitle>
    </FooterContainer>
  );
};

export default Footer;
