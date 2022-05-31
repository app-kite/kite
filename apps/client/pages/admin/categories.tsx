import React, { FormEvent } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useQueryClient } from 'react-query';
import { useCategories } from '../../features/categories/hooks/useCategories';
import { useCreateCategory } from '../../features/categories/hooks/useCreateCategory';
import { SettingsLayout } from '../../features/settings/components/SettingsLayout';
import {
  Button,
  ButtonVariant,
  Form,
  Input,
  Modal,
  Text,
  useModal,
} from '@kite/ui';
import { CreateCategoryPayload } from '../../features/categories/api';
import CloseIcon from '@kite/ui/assets/icons/close.svg';
import { useDeleteCategory } from '../../features/categories/hooks/useDeleteCategory';

type FormValues = CreateCategoryPayload;

const CategoriesPage = () => {
  const queryClient = useQueryClient();
  const { data: categories } = useCategories();
  const createCategoryMutation = useCreateCategory();
  const deleteCategoryMutation = useDeleteCategory();
  const { open, close } = useModal();

  const form = useForm<FormValues>();

  const handleDeleteCategory = (id: number, isEmpty: boolean) => {
    const deleteCategory = async (newCategoryId: number) => {
      await deleteCategoryMutation.mutateAsync({
        id,
        newCategoryId,
      });
      await queryClient.invalidateQueries('categories');
      close();
    };

    const submitForm = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const target = event.target as typeof event.target & {
        newCategoryId: { value: string };
      };

      deleteCategory(Number(target.newCategoryId.value));
    };

    if (isEmpty) {
      deleteCategory(0);
    } else {
      open(
        <form onSubmit={submitForm}>
          <Modal.Header>Delete a category</Modal.Header>
          <Modal.Content>
            <div>
              <Text size="md">
                All post of deleted category will be transfered to this
                category:
              </Text>
            </div>
            <select name="newCategoryId">
              {categories?.map(c => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </Modal.Content>
          <Modal.Footer>
            <Button variant={ButtonVariant.DEFAULT} onClick={close}>
              Cancel
            </Button>
            <Button type="submit" variant={ButtonVariant.PRIMARY}>
              Delete
            </Button>
          </Modal.Footer>
        </form>,
      );
    }
  };

  const onSubmit = async (values: FormValues) => {
    await createCategoryMutation.mutateAsync(values);
    await queryClient.invalidateQueries('categories');
    form.reset({ name: '' });
  };

  return (
    <SettingsLayout>
      <Categories>
        {categories?.map(c => (
          <Category key={c.id}>
            <CategoryInfo>
              <Text size="md">{c.name}</Text>
              <PostsCount>{c.posts}</PostsCount>
            </CategoryInfo>
            <CloseButton
              width={16}
              height={16}
              onClick={() => handleDeleteCategory(c.id, c.posts === 0)}
            />
          </Category>
        ))}
      </Categories>
      <Form onSubmit={form.handleSubmit(onSubmit)}>
        <Category>
          <CategoryInput {...form.register('name')} />
          <Button variant={ButtonVariant.DEFAULT}>Add category</Button>
        </Category>
      </Form>
    </SettingsLayout>
  );
};

export default CategoriesPage;

const Categories = styled.ul`
  margin: 0;
  padding: 0;
`;

const Category = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px 20px;
  border: 1px solid #eee;

  & + & {
    border-top-width: 0;
  }
`;

const CategoryInfo = styled.div`
  display: flex;
  gap: 10px;
  flex-grow: 1;
`;

const PostsCount = styled(Text).attrs({ size: 'sm' })`
  border-radius: 4px;
  background-color: #eee;
  padding: 2px 5px;
`;

const CloseButton = styled(CloseIcon)`
  cursor: pointer;
`;

const CategoryInput = styled(Input)`
  flex-grow: 1;
`;
