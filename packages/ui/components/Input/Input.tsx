import React, {ChangeEvent, forwardRef} from 'react';
import styled from 'styled-components';
import { InputWrapper } from '../InputWrapper';

type Props = {
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    value,
    onChange,
    ...rest
  } = props;

  return (
    <InputWrapper>
      <InputComponent {...rest} ref={ref} />
    </InputWrapper>
  );
});

const InputComponent = styled.input`
  border: none;
  outline: none;
  flex-grow: 1;
  font-size: 14px;
`;
