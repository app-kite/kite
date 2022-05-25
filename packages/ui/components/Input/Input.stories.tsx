import React, {useState} from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import {Input} from './Input';

export default {
  title: 'ui/Input',
  component: Input
} as ComponentMeta<typeof Input>;

const PlaygroundContent: ComponentStory<typeof Input> = args => {
  const [value, setValue] = useState('');

  return (
    <Input value={value} onChange={ev => setValue(ev.target.value)} />
  )
}

export const Default = PlaygroundContent.bind({});

