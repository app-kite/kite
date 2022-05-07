import React from 'react';
import styled from 'styled-components';
import {Controller, useForm} from 'react-hook-form';
import {Button, ButtonVariant, defaultValue, Descendant, Editor, Modal, Text} from '@kite/ui';
import {Category} from '../../../categories/type';
import {CreatePostPayload} from '../../api';
import {useCreatePost} from '../../hooks/useCreatePost';

type FormValues = CreatePostPayload;

type Props = {
  categories: Category[];
}

export const SubmitPostForm = ({
  categories,
}: Props) => {
  const createPostMutation = useCreatePost();

  const form = useForm<FormValues>({
    defaultValues: {
      title: '',
      text: defaultValue,
    }
  }) as any; // https://github.com/react-hook-form/react-hook-form/issues/4055

  const onSubmit = (values: FormValues) => {
    createPostMutation.mutateAsync(values);
  }

  return (
    <>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Modal.Header>Submit a post</Modal.Header>
        <Content>
          <Fieldset>
            <Text size="lg">Title</Text>
            <input {...form.register('title')} />
          </Fieldset>
          <Fieldset>
            <Text size="lg">Text</Text>
            <Controller name="text" control={form.control} render={(props) => (
              <Editor value={props.field.value} onChange={props.field.onChange} />
            )}/>

          </Fieldset>
          <Footer>
            <div>
              <select {...form.register('categoryId')}>
                {
                  categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))
                }
              </select>
            </div>

            <div>
              <Button type="submit" variant={ButtonVariant.PRIMARY}>
                Submit
              </Button>
            </div>
          </Footer>
        </Content>
      </form>
    </>
  )
}

const Content = styled(Modal.Content)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Fieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Footer = styled(Modal.Footer)`
  display: flex;
  justify-content: space-between;;
`;
