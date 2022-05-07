import React from 'react';
import type {NextPage} from 'next';
import {Header} from '../features/layout/components/Header';
import {Button, ButtonVariant, useModal} from '@kite/ui';
import {SubmitPostForm} from '../features/posts/components/SubmitPostForm'
import {useCategories} from '../features/categories/hooks/getCategories';

const Home: NextPage = () => {
  const {open} = useModal();
  const {data: categories} = useCategories();

  const handleOpen = () => {
    open(<SubmitPostForm categories={categories || []}/>);
  }

  return (
    <>
      <Header/>
      <Button variant={ButtonVariant.PRIMARY} onClick={handleOpen}>
        Submit a post
      </Button>
    </>
  )
}

export default Home
