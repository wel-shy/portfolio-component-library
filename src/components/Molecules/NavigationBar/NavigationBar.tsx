import React, { useState } from "react";
import styled, { useTheme } from "styled-components";

import { ITheme } from "../../../theme/theme";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Nav = styled.nav`
  background: ${({ theme }) => theme.colors.background};
`;

const BrandContainer = styled.div`
  display: flex;
  flex: 1;
`;

const RightGroupContainer = styled.div`
  display: flex;
  flex: 2;
  justify-content: flex-end;
`;

const IconContainer = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  margin-right: 1em;
`;

const SideMenu = styled.div`
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const NavContent = styled.div`
  display: flex;
  width: 100%;
`;

interface NavigationBarProps {
  brand: JSX.Element;
  rightGroup?: JSX.Element[];
  closeIcon: JSX.Element;
  menuIcon: JSX.Element;
}

export const NavigationBar = ({
  brand,
  rightGroup,
  closeIcon,
  menuIcon,
}: NavigationBarProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { width } = useWindowDimensions();
  const theme = useTheme() as ITheme;
  const isCollapsed = width <= theme.sizes.screen.m;

  const hasLinks = rightGroup && rightGroup.length;

  const Icon = hasLinks ? (
    <IconContainer>
      {isOpen ? (
        <div onClick={() => setIsOpen(false)}>{closeIcon}</div>
      ) : (
        <div onClick={() => setIsOpen(true)}>{menuIcon}</div>
      )}
    </IconContainer>
  ) : (
    <></>
  );

  return (
    <Nav>
      <NavContent>
        <BrandContainer>{brand}</BrandContainer>
        {isCollapsed ? (
          Icon
        ) : rightGroup && rightGroup.length ? (
          <RightGroupContainer>{rightGroup}</RightGroupContainer>
        ) : null}
      </NavContent>
      {isOpen && (
        <SideMenu>
          {rightGroup && rightGroup.length ? rightGroup : <></>}
        </SideMenu>
      )}
    </Nav>
  );
};
