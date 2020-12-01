import React from "react";
import { FaBars } from "react-icons/fa";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  Abbr,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">CrimeSurge</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
            <NavLinks to="home"><Abbr title ="Home">Home</Abbr></NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about"><Abbr title = "About">About</Abbr></NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="map"><Abbr title = "Crime Map">Crime Map</Abbr></NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="statistics"><Abbr title = "Statistics">Statistics</Abbr></NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="documentation"><Abbr title = "Documentation">Documentation</Abbr></NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
