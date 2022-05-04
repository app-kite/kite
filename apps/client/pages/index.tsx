import type {NextPage} from 'next'
import styled from 'styled-components';
import {Header} from '../features/layout/components/Header';
import {useState} from 'react';
import wretch from 'wretch';

const Home: NextPage = () => {
  return (
    <>
      <Header />
    </>
  )
}

const Main = styled.main`
  color: red;
`;

export default Home
