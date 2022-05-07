import React from 'react';
import { Text } from 'slate';
import { Paragraph } from './components';

export const serialize = node => {
  if (Text.isText(node)) {
    return node.text;
  }

  const children = node.children.map(serialize).join('');

  switch (node.type) {
    case 'paragraph':
      return <Paragraph>{children}</Paragraph>;
    default:
      return children;
  }
};
