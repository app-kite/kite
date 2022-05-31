import React from 'react';
import styled from 'styled-components';
import {format} from 'date-fns';

import {Descendant, serialize, Text} from '@kite/ui';

const DATE_FORMAT = 'dd.MM.yyyy H:mm';

type Props = {
  author: {
    id: number;
    avatar: string;
    name: string;
    surname: string;
  };
  createdAt: string;
  text: Descendant[];
};

export const Comment = (props: Props) => {
  const { author, createdAt, text } = props;

  return (
    <Root>
      <Info>
        <Avatar src={author.avatar} />
        <Text>
          {author.name} {author.surname}
        </Text>
        <Text>∙</Text>
        <Text size="md" muted>{format(new Date(createdAt), DATE_FORMAT)}</Text>
      </Info>
      <Body>
        {text.map(serialize)}
      </Body>
    </Root>
  );
};

const Root = styled.article`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Info = styled.header`
  display: flex;
  gap: 5px;
  align-items: center;
`;

const Avatar = styled.img`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  border: 1px solid #fff;
`;

const Body = styled.div`
  
`;
