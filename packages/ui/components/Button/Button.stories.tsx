import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button, ButtonVariant } from './Button';

export default {
  title: 'ui/Button',
  component: Button,
  argTypes: {
    variant: {
      defaultValue: ButtonVariant.DEFAULT,
      options: [ButtonVariant.DEFAULT, ButtonVariant.PRIMARY],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Button>;

const PlaygroundContent: ComponentStory<typeof Button> = (
  args: JSX.IntrinsicAttributes & React.ButtonHTMLAttributes<HTMLButtonElement>,
) => {
  return <Button {...args} />;
};

export const Default = PlaygroundContent.bind({});

Default.args = {
  children: 'Button',
  disabled: false,
};
