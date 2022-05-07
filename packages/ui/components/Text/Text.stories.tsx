import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text } from '../Text';

export default {
  title: 'ui/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const PlaygroundContent: ComponentStory<typeof Text> = args => {
  return <Text {...args} />;
};

export const Default = PlaygroundContent.bind({});

Default.args = {
  children: 'Пример стори',
};
