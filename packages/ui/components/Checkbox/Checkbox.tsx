import React from 'react';
import styled from 'styled-components';

export const Checkbox = () => {
  return (
    <Root>
      <Input type="checkbox"></Input>
      <Box></Box>
      <BoxBorder></BoxBorder>
    </Root>
  );
};

const Root = styled.label`
  display: block;
  cursor: pointer;
`;
const Box = styled.span`
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #cecece;
`;
const Input = styled.input`
  position: absolute;

  &:checked + ${Box} {
    background-color: #7db1ff;
  }
`;
const BoxBorder = styled.span`
  width: 4px;
  height: 7px;
  border: solid #fff;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  position: absolute;
  margin: 3px 6px;
`;
