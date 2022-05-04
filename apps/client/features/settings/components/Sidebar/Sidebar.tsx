import React from 'react';
import styled from 'styled-components';

export const Sidebar = () => {
  return (
    <Root>
      <a>Main</a>
    </Root>
  )
}

const Root = styled.aside`
  flex: 0 0 150px;
  border-right: 1px solid #ccc;
  height: 100%;
`;
