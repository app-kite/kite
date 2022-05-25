import React from 'react';
import styled from 'styled-components';
import { Text } from '../Text';

type FormProps = {
  children: React.ReactNode;
} & React.FormHTMLAttributes<HTMLFormElement>;

export const Form = ({ children, ...props }) => {
  return <form {...props}>{children}</form>;
};

Form.FormItem = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

type LabelProps = {
  children: React.ReactNode;
};

Form.Label = ({ children }: LabelProps) => {
  return (
    <div>
      <Text size="md">{children}</Text>
    </div>
  );
};
