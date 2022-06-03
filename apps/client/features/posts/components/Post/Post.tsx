import React, { useMemo } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Descendant, serialize, Text, Vote } from '@kite/ui';
import { Category } from '../../../categories/type';

type Props = {
  id: number;
  title: string;
  text?: Descendant[];
  votes: number;
  hasVoted?: boolean;
  category: Category;
  onVote(hasVote: boolean): void;
};

export const Post = ({
  id,
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
      <Vote value={votes} onVote={onVote} hasVoted={hasVoted} />
      <Body>
        <Link href={`/posts/${id}`}>
          <a>
            <Text size="md" bold>
              {title}
            </Text>
          </a>
        </Link>
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
  background-color: #fff;
  flex-grow: 1;
  border: 1px solid #A9C8DF;
  padding: 10px;
  border-radius: 4px;
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
