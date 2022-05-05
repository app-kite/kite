import React from "react";
import styled from "styled-components";

type ButtonProps = {} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FunctionComponent<ButtonProps> = ({ children }) => (
  <Container>{children}</Container>
);

const Container = styled.button<ButtonProps>`
  background: linear-gradient(180deg, #ffffff 0%, #eeeeee 100%);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 4px 34px;
  border: none;
  cursor: pointer;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
`;
