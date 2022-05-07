import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Editor} from './Editor';
import {defaultValue} from './defaultValue';

export default {
  title: 'ui/Editor',
  component: Editor,
} as ComponentMeta<typeof Editor>;

const PlaygroundContent: ComponentStory<typeof Editor> = () => {
  const [value, setValue] = useState(defaultValue);

  return (
    <Editor value={value} onChange={setValue} />
  )
}

export const Default = PlaygroundContent.bind({});
