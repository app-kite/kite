import React, {ReactNode} from 'react';
import {Layout} from '../../../layout/components/Layout';
import {Button, ButtonVariant} from '@kite/ui';
import {Voters} from '../../../votes/components/Voters';

type Props = {
  children?: ReactNode;
  postInfo: ReactNode;
}

export const PostLayout = ({children, postInfo}: Props) => {

  return (
    <Layout>
      <Layout.Sidebar>
        <Button variant={ButtonVariant.DEFAULT}>Submit a post</Button>
        {postInfo}
      </Layout.Sidebar>
      {children}
    </Layout>
  )
}
