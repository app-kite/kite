import React, { useState } from 'react';
import styled from 'styled-components';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Select } from './Select';

export default {
  title: 'ui/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

type SelectOption = {
  value: string;
  label: string;
}

const items: SelectOption[] = [
  { value: 'IN_REVIEW', label: 'In Review' },
  { value: 'PLANNED', label: 'Planned' },
  { value: 'IN_PROGRESS', label: 'In Progress' },
  { value: 'COMPLETED', label: 'Completed' },
  { value: 'CANCELLED', label: 'Cancelled' },
];

const PlaygroundContent: ComponentStory<typeof Select> = args => {
  const [value, setValue] = useState(null);

  return (
    <Root>
      <Select<SelectOption>
        value={value}
        items={items}
        onSelect={setValue}
        getLabel={item => item.label}
        getKey={item => item.value}
      />
    </Root>
  );
}

export const Default = PlaygroundContent.bind({});

const Root = styled.div`
  width: 300px;
`