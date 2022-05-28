import React from 'react';
import styled from 'styled-components';
import { Text } from '@kite/ui';

type Props = {
  voters: {
    id: number;
    avatar: string;
  }[];
};

export const Voters = ({ voters }: Props) => {
  const totalVoters = voters.length;

  let fiveAvatars = voters.slice(-5).map(voter => {
    return (
      <Avatar
        key={voter.id}
        className="avatar"
        src={voter.avatar}
        alt="avatar"
      />
    );
  });

  let finalTextToDisplay = '';
  if (totalVoters === 0) {
    finalTextToDisplay = 'No voters yet';
  } else if (totalVoters === 1) {
    finalTextToDisplay = `${totalVoters} voter`;
  } else {
    finalTextToDisplay = `${totalVoters} voters`;
  }

  return (
    <Root>
      <Avatars>{fiveAvatars}</Avatars>
      <Text>{finalTextToDisplay}</Text>
    </Root>
  );
};

const Root = styled.div`
  width: 143px;
  height: 41px;
  display: flex;
  align-items: center;
  padding: 10px 0 10px 10px;
  margin: 10px;
`;

const Avatars = styled.div`
  display: flex;
`;

const Avatar = styled.img`
  width: 20px;
  height: 20px;
  border: 1px solid #fff;
  background-position: center;
  background-size: cover;
  border-radius: 50px;
  margin-left: -12px;

  &:first-child {
    margin-left: 0px;
  }

  &:last-child {
    margin-right: 5px;
  }
`;
