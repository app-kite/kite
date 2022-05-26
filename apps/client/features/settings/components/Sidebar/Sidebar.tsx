import React from 'react';
import styled from 'styled-components';
import { Text } from '../../../../../../packages/ui';

export const Sidebar = () => {
  return (
    <Root>
      <Text size="md">Settings</Text>
      <Text size="md">Categories</Text>
    </Root>
  );
};

const Root = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 0 0 150px;
  border-right: 1px solid #ccc;
  height: 100%;
`;
