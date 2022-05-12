import React, {ReactNode} from 'react';
import {Layout} from '../../../layout/components/Layout';

type Props = {
  children?: ReactNode;
}

export const PostLayout = ({children}: Props) => {

  return (
    <Layout>
      <Layout.Sidebar>
        Post info
      </Layout.Sidebar>
      {children}
    </Layout>
  )
}
