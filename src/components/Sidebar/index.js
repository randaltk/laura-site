import React, { useState } from "react";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./styles";

function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink href="about" onClick={toggle}>
            {".about"}
          </SidebarLink>
          <SidebarLink href="discover" onClick={toggle}>
            {"navbar.discover"}
          </SidebarLink>
          <SidebarLink href="services" onClick={toggle}>
            {"navbar.services"}
          </SidebarLink>
          <SidebarLink href="team" onClick={toggle}>
            {"navbar.team"}
          </SidebarLink>
          <SidebarLink href="contact" onClick={toggle}>
            {"navbar.contact"}
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
