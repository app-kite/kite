import React from 'react';
import styled from 'styled-components';

type Props = {
  size: 'sm' | 'md' | 'lg';
};

/**
 * Component for typography
 */
export const Text = ({ children, ...props }) => {
  return <Root {...props}>{children}</Root>;
};

const Root = styled.span<Props>`
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
`;
