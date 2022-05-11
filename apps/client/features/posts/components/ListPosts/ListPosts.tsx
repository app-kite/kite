import React, { Fragment, useEffect } from 'react';
import styled from 'styled-components';
import { useInfiniteQuery } from 'react-query';
import { Post } from '../Post';
import { listPosts } from '../../api';
import { useIntersection } from '../../hooks/useIntersection';
import { useUpdateVote } from '../../../votes/hooks/useUpdateVote';

const Loader: React.FunctionComponent = () => <div>Loading</div>;

export const ListPosts = () => {
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

  return (
    <Root>
      {isFetching && <Loader />}
      {data &&
        data.pages.map(page => (
          <Fragment key={page.nextId ?? 'lastPage'}>
            {page.posts.map(post => (
              <Post
                title={post.title}
                text={post.text}
                category={post.category}
                onVote={() => updateVoteMutation.mutate({ postId: post.id })}
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
`;

const Trigger = styled.div`
  visibility: hidden;
  height: 1px;
`;
