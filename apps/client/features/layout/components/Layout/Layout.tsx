import React, { ReactNode } from 'react';
import { Header, HEADER_HEIGHT } from '../Header';
import styled from 'styled-components';

type Props = {
  children?: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <Root>
      <Header />
      <Container>{children}</Container>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 800px;
  display: flex;
  flex-wrap: wrap;
  margin: ${HEADER_HEIGHT + 25}px auto 0;
  gap: 40px;
`;

Layout.Sidebar = styled.aside`
  width: 200px;
`;

Layout.Content = styled.div`
  flex-grow: 1;
`;
