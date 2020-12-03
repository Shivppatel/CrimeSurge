import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
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
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            CrimeSurge
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                <Abbr title="Home">Home</Abbr>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                <Abbr title="About">About</Abbr>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="map"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                <Abbr title="Crime Map">Crime Map</Abbr>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="statistics"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                <Abbr title="Statistics">Statistics</Abbr>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="documentation"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                <Abbr title="Documentation">Documentation</Abbr>
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
