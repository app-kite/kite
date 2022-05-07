import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Vote } from './Vote';

export default {
  title: 'ui/Vote',
  component: Vote,
} as ComponentMeta<typeof Vote>;

const PlaygroundContent: ComponentStory<typeof Vote> = args => {
  const [isActivated, setActivated] = useState(false);
  const value = args.value;

  const handleClick = isActivated => {
    setActivated(isActivated);
  };

  return (
    <Vote
      value={isActivated ? value + 1 : value}
      onChange={handleClick}
      isActivated={isActivated}
    />
  );
};

export const Default = PlaygroundContent.bind({});

Default.args = {
  value: 381,
};
