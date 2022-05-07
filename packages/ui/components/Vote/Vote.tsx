import React from 'react';
import styled from 'styled-components';
import { Text } from '../Text';
import ChevronUpIcon from '../../assets/icons/chevron-up.svg';

type Props = {
  value: number;
  onVote(hasVoted: boolean): void;
  hasVoted: boolean;
};

export const Vote = ({ value, onVote, hasVoted }: Props) => {
  const handleClick = () => {
    onVote(!hasVoted);
  };

  return (
    <Root onClick={handleClick} isActivated={hasVoted}>
      <ChevronUpIcon />
      <Text size="sm">{value}</Text>
    </Root>
  );
};

const Root = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 38px;
  height: 48px;
  justify-content: start;
  align-items: center;
  border-radius: 4px;
  background-color: #ededed;
  font-weight: bold;
  cursor: pointer;
  color: ${p => (p.isActivated ? p.theme.primaryColor : p.theme.textColor)};
  user-select: none;
  ${p => console.log(p.theme)};
`;
