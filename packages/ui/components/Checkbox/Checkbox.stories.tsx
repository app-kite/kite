import React, { ComponentProps } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Checkbox } from './Checkbox';

export default {
  title: 'ui/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const PlaygroundContent: ComponentStory<typeof Checkbox> = (
  args: JSX.IntrinsicAttributes & ComponentProps<typeof Checkbox>,
) => {
  return <Checkbox />;
};

export const Default = PlaygroundContent.bind({});
