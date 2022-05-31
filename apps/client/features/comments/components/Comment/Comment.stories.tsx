import React, { ComponentProps } from 'react';
import { Meta } from '@storybook/react';

import { Comment } from './Comment';

export default {
  title: 'features/Comments/Comment',
  component: Comment,
} as Meta;

const comment: ComponentProps<typeof Comment> = {
  author: {
    id: 1,
    avatar: 'https://i.pravatar.cc/100',
    name: 'eden',
    surname: 'lane',
  },
  text: [
    {
      type: 'paragraph',
      children: [
        {
          text: 'First line of the comment',
        },
      ],
    },
    {
      type: 'paragraph',
      children: [
        {
          text: 'Second line of the comment',
        },
      ],
    },
  ],
  createdAt: '2022-02-02 14:33',
};

export const Default = () => {
  return <Comment {...comment} />;
};
