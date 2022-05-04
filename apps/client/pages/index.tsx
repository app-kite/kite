import React from 'react';
import type {NextPage} from 'next';
import {Header} from '../features/layout/components/Header';
import {Text} from '@kite/ui';

const Home: NextPage = () => {
  return (
    <>
      <Header/>
      <Text>
        test
      </Text>
    </>
  )
}

export default Home
