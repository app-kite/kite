import { ReactNode } from 'react';
import { Layout } from '../../../layout/components/Layout';
import { Sidebar } from '../Sidebar';
import { useCategories } from '../../../categories/hooks/useCategories';

type Props = {
  children: ReactNode;
};

export const FeedbackLayout = ({ children }: Props) => {
  const { data: categories } = useCategories();

  return (
    <Layout>
      <Sidebar categories={categories || []} />
      {children}
    </Layout>
  );
};
