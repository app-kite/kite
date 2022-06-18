import React from 'react';
import styled from 'styled-components';
import { Controller, useForm } from 'react-hook-form';
import {
  Button,
  ButtonVariant,
  Select,
  defaultValue,
  Editor,
  Input,
  Modal,
  Text,
} from '@kite/ui';
import { Category } from '../../../categories/type';
import { CreatePostPayload } from '../../api';
import { useCreatePost } from '../../hooks/useCreatePost';

type FormValues = Omit<CreatePostPayload, 'categoryId'> & {
  category: Category;
};

type Props = {
  categories: Category[];
};

export const SubmitPostForm = ({ categories }: Props) => {
  const createPostMutation = useCreatePost();

  const form = useForm<FormValues>({
    defaultValues: {
      title: '',
      text: defaultValue,
      category: categories[0],
    },
  }) as any; // https://github.com/react-hook-form/react-hook-form/issues/4055

  const onSubmit = (values: FormValues) => {
    createPostMutation.mutateAsync({
      ...values,
      categoryId: Number(values.category.id),
    });
  };

  return (
    <>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Modal.Header>Submit a post</Modal.Header>
        <Content>
          <Fieldset>
            <Text size="md" bold>
              Title
            </Text>
            <Input {...form.register('title')} />
          </Fieldset>
          <Fieldset>
            <Text size="md" bold>
              Text
            </Text>
            <Controller
              name="text"
              control={form.control}
              render={props => (
                <Editor
                  value={props.field.value}
                  onChange={props.field.onChange}
                />
              )}
            />
          </Fieldset>
        </Content>
        <Footer>
          <SelectWrapper>
            <Controller
              name="category"
              control={form.control}
              render={props => (
                <Select<Category>
                  value={props.field.value}
                  onSelect={props.field.onChange}
                  items={categories}
                  getKey={item => item.id}
                  getLabel={item => item.name}
                />
              )}
            />
          </SelectWrapper>
          <div>
            <Button type="submit" variant={ButtonVariant.PRIMARY}>
              Submit
            </Button>
          </div>
        </Footer>
      </form>
    </>
  );
};

const Content = styled(Modal.Content)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Fieldset = styled.fieldset`
  padding: 0;
  margin: 0;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Footer = styled(Modal.Footer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SelectWrapper = styled.div`
  width: 150px;
`;