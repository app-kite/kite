import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Form } from './Form';
import {Input} from '../Input';

export default {
  title: 'ui/Form',
  component: Form,
} as ComponentMeta<typeof Form>;

const PlaygroundContent: ComponentStory<typeof Form> = (args) => {
  return (
    <Form>
      <Form.FormItem>
        <Form.Label>Name:</Form.Label>
        <Input value='Some name' />
      </Form.FormItem>
    </Form>
  )
}

export const Default = PlaygroundContent.bind({});
