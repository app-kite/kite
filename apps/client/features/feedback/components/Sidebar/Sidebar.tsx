import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Button, ButtonVariant, Text, useModal } from '@kite/ui';
import { SubmitPostForm } from '../../../../features/posts/components/SubmitPostForm';
import { Category } from '../../../categories/type';
import { useCategories } from '../../../categories/hooks/getCategories';

type Props = {
  categoriesList?: Category[];
};

const defaultCategories: Category[] = [];

export const Sidebar = ({ categoriesList = defaultCategories }: Props) => {
  const totalPosts = useMemo(() => {
    return categoriesList.reduce((total, category) => {
      return total + category.posts;
    }, 0);
  }, [categoriesList]);

  const { open } = useModal();
  const { data: categories } = useCategories();

  const handleOpen = () => {
    open(<SubmitPostForm categories={categories || []} />);
  };

  return (
    <Root>
      <Header>
        <Button onClick={handleOpen} variant={ButtonVariant.DEFAULT}>
          Submit a post
        </Button>
      </Header>
      <Subheader size="md">Filters</Subheader>
      <List>
        <ListItem>
          <Text size="md">All categories</Text>
          <Label>{totalPosts}</Label>
        </ListItem>
        {categoriesList.map(category => (
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

const Header = styled.header`
  padding: 0 0 10px;
`;

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
  display: inline-flex;
  align-items: center;
  padding: 0 5px;
  background-color: #eee;
  border-radius: 4px;
`;
