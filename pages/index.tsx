import type {NextPage} from 'next'
import styled from 'styled-components';
import {Header} from '../features/layout/components/Header';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Main>Test</Main>
    </>
  )
}

const Main = styled.main`
  color: red;
`;

export default Home
