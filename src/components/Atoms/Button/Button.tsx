import styled from "styled-components";
import { ITheme } from "../../../theme/theme";

export const Button = styled.button`
  background: transparent;
  border: 1px solid ${({theme}) => theme.colors.primary};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  font-weight: 700;
  font-family: ${({theme}) => (theme as ITheme).font.sans};
  font-size: 1em;
  padding: 0.5em;
  margin: 0 0.5em;
  transition: 0.25s ease all;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({theme}) => theme.colors.white};
    color:${({theme}) => theme.colors.white};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background: ${(props) => props.theme.colors.grey};
    border: 1px solid ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.white};
    cursor: not-allowed;
  }
`;