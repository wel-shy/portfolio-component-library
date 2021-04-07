import React from "react";
import styled from "styled-components";
import { ITheme } from "../../../theme/theme";

const Link = styled.a<{active: boolean}>`
  color: ${({ theme: {colors: {text, textAccent}}, active }) => active ? textAccent : text};
  border-radius: 10px;
  font-family: ${({ theme }) => (theme as ITheme).font.sans};
  font-weight: bold;
  margin: 0 0.125em;
  padding: 1em;
  text-decoration: ${({ active }) => active ? "underline" : "none"};
  text-underline-offset: 5px;
  transition: 0.25s ease all;

  &:hover {
    color: ${({ theme }) => (theme as ITheme).colors.textAccent};
  }
`;

interface NavItemProps {
  active: boolean;
  children: any;
  href: string;
}

export const NavItem = ({ active = false, children, href = "/" }: NavItemProps) => {
  return (
    <Link active={ active } href={ href }>{ children }</Link>
  );
}