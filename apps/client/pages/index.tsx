import React, { useState } from 'react';
import type { NextPage } from 'next';
import { Layout } from '../features/layout/components/Layout';
import { SubmitPostForm } from '../features/posts/components/SubmitPostForm';
import { Sidebar } from '../features/feedback/components/Sidebar';
import { useCategories } from '../features/categories/hooks/getCategories';
import { ListPosts } from '../features/posts/components/ListPosts';
import { FeedbackLayout } from '../features/feedback/components/FeedbackLayout';

const Home: NextPage = () => {
  const { data: categories } = useCategories();
  const [isActivated, setActivated] = useState(false);

  const handleClick = (isActivated: boolean) => {
    setActivated(isActivated);
  };

  return (
    <FeedbackLayout>
      <ListPosts />
    </FeedbackLayout>
  );
};

export default Home;
