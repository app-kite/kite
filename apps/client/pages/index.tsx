import React, { useState } from 'react';
import type { NextPage } from 'next';
import { Layout } from '../features/layout/components/Layout';
import { SubmitPostForm } from '../features/posts/components/SubmitPostForm';
import { Sidebar } from '../features/feedback/components/Sidebar';
import { useCategories } from '../features/categories/hooks/getCategories';
import { ListPosts } from '../features/posts/components/ListPosts';

const Home: NextPage = () => {
  const { data: categories } = useCategories();
  const [isActivated, setActivated] = useState(false);

  const handleClick = (isActivated: boolean) => {
    setActivated(isActivated);
  };

  return (
    <Layout
      leftContent={
        <Sidebar
          categoriesList={[
            { id: '1', name: 'Feature Request', posts: 103 },
            { id: '2', name: 'Bug Report', posts: 71 },
          ]}
        />
      }
    >
      <ListPosts />
    </Layout>
  );
};

export default Home;
