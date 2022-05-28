import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Voters } from './Voters';

export default {
  title: 'Features/Votes/Voters',
  component: Voters,
} as ComponentMeta<typeof Voters>;

const PlaygroundContent: ComponentStory<typeof Voters> = args => {
  return <Voters {...args} />;
};

export const Default = PlaygroundContent.bind({});
export const OneVoter = PlaygroundContent.bind({});
export const ManyVoters = PlaygroundContent.bind({});

Default.args = {
  voters: [],
};
OneVoter.args = {
  voters: [
    {
      id: 1,
      avatar: 'http://images.wisegeek.com/asian-man-wearing-blue-shirt.jpg',
    },
  ],
};
ManyVoters.args = {
  voters: [
    {
      id: 1,
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXVm9VyXqbrwYvC2OfYoNtPfwlF6hNlu1VuxCTeAM_JLjuNLr64D4ksxCYbrB5L2GQS3Y&usqp=CAU',
    },
    {
      id: 2,
      avatar:
        'https://www.paho.org/sites/default/files/styles/max_1500x1500/public/2021-05/young-adults-1500x918.jpg?itok=v0CVkf-c',
    },
    {
      id: 3,
      avatar:
        'https://t1.ldh.be/yJiM0NOkliobl02nLEiuBi2PONw=/620x310/627d2e229978e23d19662223.jpg',
    },
    {
      id: 4,
      avatar:
        'https://images.theconversation.com/files/225667/original/file-20180702-116143-4f9d6c.jpg?ixlib=rb-1.1.0&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip',
    },
    {
      id: 5,
      avatar: 'http://images.wisegeek.com/asian-man-wearing-blue-shirt.jpg',
    },
  ],
};
