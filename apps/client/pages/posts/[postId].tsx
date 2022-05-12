import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { PostLayout } from '../../features/posts/components/PostLayout/PostLayout';
import { useRouter } from 'next/router';
import { usePost } from '../../features/posts/hooks/usePost';
import { dehydrate, QueryClient, useQueryClient } from 'react-query';
import { getPost } from '../../features/posts/api';
import { Post } from '../../features/posts/components/Post';
import { Post as TPost } from '../../features/posts/types';
import { useUpdateVote } from '../../features/votes/hooks/useUpdateVote';

const PostPage: NextPage = props => {
  const router = useRouter();
  const { postId } = router.query;

  const queryClient = useQueryClient();

  const { data: post } = usePost(Number(postId));
  const updateVoteMutation = useUpdateVote();

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
    <PostLayout>
      <Post
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

