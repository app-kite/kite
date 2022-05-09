import React, { ReactNode } from 'react';
import { Header } from '../Header';
import styled from 'styled-components';

type Props = {
  children?: ReactNode;
  leftContent?: ReactNode;
};

export const Layout = ({ children, leftContent }: Props) => {
  return (
    <Root>
      <Header />
      <Container>
        <SideBar>{leftContent}</SideBar>
        <Main>{children}</Main>
      </Container>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  width: 800px;
`;

const SideBar = styled.aside``;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  gap: 112px;
  margin-top: 25px;
`;
