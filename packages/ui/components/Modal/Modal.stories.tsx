import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Modal} from './Modal';

export default {
  title: 'ui/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const PlaygroundContent: ComponentStory<typeof Modal> = (args) => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <>
      <button onClick={handleOpen}>Open</button>
      <Modal {...args} isOpen={isOpen} onClose={handleClose}>
        <Modal.Header>Header</Modal.Header>
        <Modal.Content>Content</Modal.Content>
        <Modal.Footer>Footer</Modal.Footer>
      </Modal>
    </>
  );
}

export const Default = PlaygroundContent.bind({});

Default.args = {
}
