import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Modal } from './Modal';
import { ModalProvider, useModal } from './ModalProvider';

export default {
  title: 'ui/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const PlaygroundContent: ComponentStory<typeof Modal> = args => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <ModalProvider>
      <ModalUsage />
    </ModalProvider>
  );
};

const ModalUsage = () => {
  const { open } = useModal();

  const handleOpen = () => {
    open(
      <>
        <Modal.Header>Header</Modal.Header>
        <Modal.Content>Content</Modal.Content>
        <Modal.Footer>Footer</Modal.Footer>
      </>,
    );
  };

  return <button onClick={handleOpen}>Open</button>;
};

export const Default = PlaygroundContent.bind({});

Default.args = {};
