import { ReactNode } from 'react';
import { Layout } from '../../../layout/components/Layout';
import { Sidebar } from '../Sidebar';

type Props = {
  children: ReactNode;
};

export const FeedbackLayout = ({ children }: Props) => {
  return (
    <Layout>
      <Sidebar />
      {children}
    </Layout>
  );
};
