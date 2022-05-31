import { ReactNode } from 'react';
import { Layout } from '../../../layout/components/Layout';
import { Sidebar } from '../Sidebar';

type Props = {
  children: ReactNode;
};

export const SettingsLayout = ({ children }: Props) => {
  return (
    <Layout>
      <Sidebar />
      <Layout.Content>{children}</Layout.Content>
    </Layout>
  );
};

