import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Text } from '../../../../../../packages/ui';
import { Category } from '../../../categories/type';

type Props = {
  categories?: Category[];
};

const defaultCategories: Category[] = [];

export const Sidebar = ({ categories = defaultCategories }: Props) => {
  const totalPosts = useMemo(() => {
    return categories.reduce((total, category) => {
      return total + category.posts;
    }, 0);
  }, [categories]);

  return (
    <Root>
      <Subheader size="md">Filters</Subheader>
      <List>
        <ListItem>
          <Text size="md">All categories</Text>
          <Label>{totalPosts}</Label>
        </ListItem>
        {categories.map(category => (
          <ListItem key={category.id}>
            <Text size="md">{category.name}</Text>
            <Label>{category.posts}</Label>
          </ListItem>
        ))}
      </List>
    </Root>
  );
};

const Root = styled.aside``;

const Subheader = styled(Text).attrs({ size: 'md' })`
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${p => p.theme.primaryColor};
`;

const List = styled.ul`
  list-style: none;
  margin: 5px 0 0 0;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  padding: 5px 0;
  gap: 10px;
`;

const Label = styled(Text).attrs({ size: 'sm' })`
  padding: 0 5px;
  background-color: #eee;
  border-radius: 4px;
`;
