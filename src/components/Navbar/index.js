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
          </NavLogo>{" "}
          <MobileIcon alt="mobilehamburguer" onClick={toggle}>
            <FaBars alt="mobilebars" />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                href="about"
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                {"Sobre"}
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                href="discover"
                to="discover"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                {"Descubra"}
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                href="team"
                to="team"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                {"Detalhes"}
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                href="contact"
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                {"Contato"}
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
