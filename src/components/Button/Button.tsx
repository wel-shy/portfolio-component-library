import styled from "styled-components";

export const Button = styled.button`
  background: transparent;
  border: 1px solid ${({theme}) => theme.colors.primary};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  font-weight: 700;
  font-family: 'Noto Serif', serif;
  padding: 0.5em;
  margin: 0 0.5em;

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