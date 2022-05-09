import React, { Fragment, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useInfiniteQuery } from 'react-query';
import { Post } from '../Post';
import { listPosts } from '../../api';
import { useIntersection } from '../../hooks/useIntersection';

const Loader: React.FunctionComponent = () => <div>Loading</div>;

export const ListPosts = () => {
  const { data, isFetching, fetchNextPage, hasNextPage } = useInfiniteQuery(
    'posts',
    ({ pageParam = '' }) => {
      return listPosts(pageParam);
    },
    {
      getNextPageParam: lastPage => lastPage.nextId ?? false,
    },
  );

  const ref = useRef<HTMLDivElement>(null);

  const isIntersecting = useIntersection(ref);

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
                category={{
                  id: post.category.id,
                  name: post.category.name,
                }}
                votes={381}
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
