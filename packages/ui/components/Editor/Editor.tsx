import React, { useState } from 'react';
import styled from 'styled-components';
import { createEditor, Descendant } from 'slate';
import { Editable, RenderElementProps, Slate, withReact } from 'slate-react';
import { withHistory } from 'slate-history';
import { Paragraph } from './components';

type Props = {
  value: Descendant[];
  onChange(value: Descendant[]): void;
};

export const renderElement = (props: RenderElementProps) => {
  switch (props.element.type) {
    case 'paragraph': {
      return <Paragraph {...props.attributes}>{props.children}</Paragraph>;
    }
  }
};

export const Editor = ({ value, onChange }: Props) => {
  const [editor] = useState(() => withReact(withHistory(createEditor())));

  return (
    <>
      <Slate editor={editor} value={value} onChange={onChange}>
        <SlateEditable renderElement={renderElement} />
      </Slate>
    </>
  );
};

const SlateEditable = styled(Editable)`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 6px 10px;
  min-height: 150px;
`;
