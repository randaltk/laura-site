import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  ImgLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./styles";

function Navbar({ toggle }) {
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
          <NavLogo href="/" onClick={toggleHome}>
            <ImgLogo
              alt="logoimage"
              src={process.env.PUBLIC_URL + "nolan.webp"}
            />
          </NavLogo>
          <MobileIcon alt="mobilehamburguer" onClick={toggle}>
            <FaBars alt="mobilebars" />
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLinks
                href="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                {"navbar.about"}
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                href="discover"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                {"navbar.discover"}
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                href="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                {"navbar.services"}
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                href="team"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                {"navbar.team"}
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                href="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                {"navbar.contact"}
              </NavLinks>
            </NavItem>

            {/* <select value={language} onChange={handleSelectChange}>
              <option id="BRA" value="pt-BR">
                PT
              </option>

              <option id="EN" value="en-US">
                EN
              </option>
            </select>

            */}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
