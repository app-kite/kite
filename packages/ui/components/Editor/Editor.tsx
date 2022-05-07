import React, { useState } from 'react';
import { createEditor, Descendant } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { withHistory } from 'slate-history';

type Props = {
  value: Descendant[];
  onChange(value: Descendant[]): void;
};

export const Editor = ({ value, onChange }: Props) => {
  const [editor] = useState(() => withReact(withHistory(createEditor())));

  return (
    <Slate editor={editor} value={value} onChange={onChange}>
      <Editable />
    </Slate>
  );
};
