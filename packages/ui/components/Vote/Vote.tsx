import React from 'react';
import styled from 'styled-components';
import { Text } from '../Text';
import ChevronUpIcon from '../../assets/icons/chevron-up.svg';

type Props = {
  value: number;
  onChange(activated: boolean): void;
  isActivated: boolean;
};

export const Vote = ({ value, onChange, isActivated }) => {
  const handleClick = () => {
    onChange(!isActivated);
  };

  return (
    <Root onClick={handleClick} isActivated={isActivated}>
      <ChevronUpIcon />
      <Text size="sm">{value}</Text>
    </Root>
  );
};

const Root = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 38px;
  height: 58px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: #ededed;
  font-weight: bold;
  cursor: pointer;
  color: ${p => (p.isActivated ? p.theme.primaryColor : p.theme.textColor)};
  user-select: none;
`;
