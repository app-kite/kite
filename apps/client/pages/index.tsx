import React, { useState } from 'react';
import type { NextPage } from 'next';
import { useCategories } from '../features/categories/hooks/useCategories';
import { ListPosts } from '../features/posts/components/ListPosts';
import { FeedbackLayout } from '../features/feedback/components/FeedbackLayout';

const Home: NextPage = () => {
  return (
    <FeedbackLayout>
      <ListPosts />
    </FeedbackLayout>
  );
};

export default Home;
