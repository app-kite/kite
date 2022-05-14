import React from 'react';

import {Sidebar} from './Sidebar';
import {ComponentStory} from '@storybook/react';

export default {
  title: 'Features/Feedback/Sidebar',
  component: Sidebar,
}

const PlaygroundContent: ComponentStory<typeof Sidebar> = args => {
  return <Sidebar {...args} />
}

export const Default = PlaygroundContent.bind({});

Default.args = {
  categories: [
    { id: 1, name: 'Feature Request', posts: 103 },
    { id: 2, name: 'Bug Report', posts: 71 },
  ]
}
