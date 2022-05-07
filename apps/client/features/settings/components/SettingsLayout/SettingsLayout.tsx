import { ReactNode } from 'react';
import { Layout } from '../../../layout/components/Layout';
import { Sidebar } from '../Sidebar';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
};

export const SettingsLayout = ({ children }: Props) => {
  return (
    <Layout>
      <Root>
        <Sidebar />
        {children}
      </Root>
    </Layout>
  );
};

const Root = styled.div`
  display: flex;
  gap: 20px;
`;
