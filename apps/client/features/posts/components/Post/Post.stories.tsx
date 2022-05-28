import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Post } from './Post';

export default {
  title: 'Features/Posts/Post',
  component: Post,
} as ComponentMeta<typeof Post>;

const PlaygroundContent: ComponentStory<typeof Post> = args => {
  return <Post {...args} />;
};

export const Default = PlaygroundContent.bind({});

Default.args = {
  votes: 381,
  title: 'Add subtasks',
  category: {
    id: 1,
    name: 'Feature request',
  },
  text: [
    {
      type: 'paragraph',
      children: [{ text: 'Organize tasks and subtasks in a hierarchical way.' }],
    },
  ],
};
