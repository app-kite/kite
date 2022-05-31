import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  muted?: boolean;
  bold?: boolean;
};

/**
 * Component for typography
 */
export const Text = ({ children, size = 'md', ...props }: Props) => {
  return (
    <Root size={size} {...props}>
      {children}
    </Root>
  );
};

const Root = styled.span<Props>`
  font-weight: ${p => (p.bold ? 'bold' : 'normal')};
  font-size: ${p => {
    switch (p.size) {
      case 'sm':
        return '12px';
      case 'md':
        return '14px';
      case 'lg':
        return '16px';
    }
  }};
  color: ${p => {
    if (p.muted) {
      return '#aaa';
    } else {
      return '#000';
    }
  }};
`;
