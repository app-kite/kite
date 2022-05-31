import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Header } from './Header';

export default {
  title: 'Features/Layout/Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const PlaygroundContent: ComponentStory<typeof Header> = () => {
  return <Header />;
};

export const Default = PlaygroundContent.bind({});
