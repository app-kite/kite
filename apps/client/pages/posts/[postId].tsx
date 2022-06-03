import React, { useMemo } from 'react';
import styled from 'styled-components';
import type { GetServerSideProps, NextPage } from 'next';
import { PostLayout } from '../../features/posts/components/PostLayout/PostLayout';
import { useRouter } from 'next/router';
import { usePost } from '../../features/posts/hooks/usePost';
import { dehydrate, QueryClient, useQueryClient } from 'react-query';
import { getPost } from '../../features/posts/api';
import { Post } from '../../features/posts/components/Post';
import { Post as TPost } from '../../features/posts/types';
import { useUpdateVote } from '../../features/votes/hooks/useUpdateVote';
import { Voters } from '../../features/votes/components/Voters';
import { Text } from '@kite/ui';
import {format} from 'date-fns';

const PostPage: NextPage = props => {
  const router = useRouter();
  const { postId } = router.query;

  const queryClient = useQueryClient();

  const { data: post } = usePost(Number(postId));
  const updateVoteMutation = useUpdateVote();

  const voters = useMemo(
    () =>
      post?.votes.map(vote => ({
        id: vote.vote.author.id,
        avatar: vote.vote.author.image,
      })) || [],
    [post],
  );

  const handleUpdateVote = () => {
    if (post) {
      updateVoteMutation.mutate(
        { postId: post.id },
        {
          onSuccess(data) {
            queryClient.setQueryData<TPost | undefined>(
              ['post', post.id],
              prevPost => {
                if (!prevPost) {
                  return prevPost;
                }

                return {
                  ...prevPost,
                  votes: data.votes,
                };
              },
            );
          },
        },
      );
    }
  };

  if (!post) {
    return null;
  }

  return (
    <PostLayout
      postInfo={
        <PostInfo>
          <Voters voters={voters} />
          <Row>
            <Label>Category</Label>
            <Text size='md'>
              {post.category.name}
            </Text>
          </Row>
          <Row>
            <Label>Created</Label>
            <Text>
              {format(new Date(post.createdAt), 'd MMMM yyyy, HH:mm')}
            </Text>
          </Row>
        </PostInfo>
      }
    >
      <Post
        id={post.id}
        title={post.title}
        votes={post.votes.length}
        category={post.category}
        onVote={handleUpdateVote}
      />
    </PostLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { postId } = query;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['post', postId], () =>
    getPost(Number(postId)),
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default PostPage;

const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled(Text).attrs({bold: true, size: 'md'})``;
