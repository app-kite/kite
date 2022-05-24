import React, {ChangeEvent, forwardRef} from 'react';
import styled from 'styled-components';
import { InputWrapper } from '../InputWrapper';

type Props = {
  value: string;
  onChange(value: string): void;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    value,
    onChange,
    ...rest
  } = props;

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    onChange(ev.target.value);
  }

  return (
    <InputWrapper>
      <InputComponent {...rest} ref={ref} value={value} onChange={handleChange} />
    </InputWrapper>
  );
});

const InputComponent = styled.input`
  border: none;
  outline: none;
  flex-grow: 1;
  font-size: 14px;
`;
