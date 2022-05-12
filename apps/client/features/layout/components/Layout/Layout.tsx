import React, { ReactNode } from 'react';
import { Header } from '../Header';
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
  margin: 25px auto 0;
  gap: 112px;
`;

Layout.Sidebar = styled.aside`
  width: 200px;
`;
