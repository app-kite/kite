import React, {ReactNode} from 'react';
import {Header} from '../Header';
import styled from 'styled-components';

type Props = {
  children?: ReactNode;
}

export const Layout = ({children}: Props) => {
  return (
    <Root>
      <Header/>
      <Main>
        {children}
      </Main>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  margin: 0 auto;
  width: 800px;
`;
