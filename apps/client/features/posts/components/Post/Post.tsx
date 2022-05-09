import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Descendant, serialize, Text, Vote } from '@kite/ui';
import { Category } from '../../../categories/type';

type Props = {
  title: string;
  text?: Descendant[];
  votes: number;
  hasVoted?: boolean;
  category: Category;
  onVote(hasVote: boolean): void;
};

export const Post = ({
  title,
  text = [],
  votes = 0,
  hasVoted = false,
  category,
  onVote,
}: Props) => {
  const serializedText = useMemo(
    () =>
      text.map((node, index) => (
        <React.Fragment key={index}>{serialize(node)}</React.Fragment>
      )),
    [text],
  );

  return (
    <Root>
      <Vote value={votes} onChange={onVote} isActivated={hasVoted} />
      <Body>
        <Text size="md" bold>
          {title}
        </Text>
        <Text size="md">{serializedText}</Text>
        <Footer>
          <Tag>
            <Text size="sm">{category.name}</Text>
          </Tag>
        </Footer>
      </Body>
    </Root>
  );
};

const Root = styled.article`
  display: flex;
  gap: 10px;
  margin-bottom: 40px;
`;

const Body = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Footer = styled.footer`
  display: flex;
  gap: 5px;
  margin-top: 10px;
`;

const Tag = styled.span`
  border-radius: 4px;
  background-color: #eeeeee;
  padding: 0 8px;
`;
