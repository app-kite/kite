import React, { Fragment, useEffect } from 'react';
import styled from 'styled-components';
import { InfiniteData, useInfiniteQuery, useQueryClient } from 'react-query';
import { Post } from '../Post';
import { Post as TPost } from '../../types';
import { ListPostPayload, listPosts } from '../../api';
import { useIntersection } from '../../hooks/useIntersection';
import { useUpdateVote } from '../../../votes/hooks/useUpdateVote';

const Loader: React.FunctionComponent = () => <div>Loading</div>;

export const ListPosts = () => {
  const queryClient = useQueryClient();
  const updateVoteMutation = useUpdateVote();
  const { data, isFetching, fetchNextPage, hasNextPage } = useInfiniteQuery(
    'posts',
    ({ pageParam = '' }) => {
      return listPosts(pageParam);
    },
    {
      getNextPageParam: lastPage => lastPage.nextId ?? false,
    },
  );

  const [isIntersecting, ref] = useIntersection();

  useEffect(() => {
    if (isIntersecting && hasNextPage) {
      fetchNextPage();
    }
  }, [isIntersecting]);

  const handleSuccess = (data: TPost) => {
    queryClient.setQueryData<InfiniteData<ListPostPayload> | undefined>(
      'posts',
      previousPosts => {
        if (!previousPosts) {
          return previousPosts;
        }

        return {
          ...previousPosts,
          pages: previousPosts.pages.map(page => ({
            ...page,
            posts: page.posts.map(post => (post.id === data.id ? data : post)),
          })),
        };
      },
    );
  };

  return (
    <Root>
      {isFetching && <Loader />}
      {data &&
        data.pages.map(page => (
          <Fragment key={page.nextId ?? 'lastPage'}>
            {page.posts.map(post => (
              <Post
                id={post.id}
                title={post.title}
                text={post.text}
                category={post.category}
                onVote={() =>
                  updateVoteMutation.mutate(
                    { postId: post.id },
                    { onSuccess: handleSuccess },
                  )
                }
                votes={post.votes.length}
                key={post.id}
              />
            ))}
          </Fragment>
        ))}
      <Trigger ref={ref} />
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Trigger = styled.div`
  visibility: hidden;
  height: 1px;
`;
