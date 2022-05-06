import React from "react";
import styled from "styled-components";

type ButtonProps = {} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FunctionComponent<ButtonProps> = ({ children }) => (
  <Root>{children}</Root>
);

const Root = styled.button<ButtonProps>`
  background: linear-gradient(180deg, #FFFFFF 0%, #EEEEEE 100%);
  border: 1px solid #D8D8D8;
  border-radius: 4px;
  padding: 4px 34px;
  cursor: pointer;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: ${p => p.theme.textColor};
  
  &:hover {
    background: linear-gradient(180deg, #EEEEEE 0%, #E7E7E7 100%);;
  }
  
  &:active {
    background: #DFDFDF;
  }
`;
