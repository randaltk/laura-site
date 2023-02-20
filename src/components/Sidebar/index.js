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
            {"Sobre"}
          </SidebarLink>
          <SidebarLink href="discover" onClick={toggle}>
            {"Descubra"}
          </SidebarLink>
          <SidebarLink href="team" onClick={toggle}>
            {"Detalhes"}
          </SidebarLink>
          <SidebarLink href="contact" onClick={toggle}>
            {"Contato"}
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
