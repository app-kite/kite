import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import { Select, Text } from '@kite/ui';
import { Post } from '../../types';
import { Voters } from '../../../votes/components/Voters';
import { STATUSES_LIST, STATUSES_MAP } from '../../../posts/constants';
import { useRole } from '../../../auth/hooks/useRole';
import { useUpdatePost } from '../../hooks/useUpdatePost';

type Props = {
  post: Post;
};

type StatusOptions = typeof STATUSES_LIST;
type StatusOption = StatusOptions[number];

export const PostInfo = (props: Props) => {
  const { post } = props;
  const role = useRole();

  const [status, setStatus] = useState<StatusOption | null>(null);
  const updatePostMutation = useUpdatePost(post.id);

  useEffect(() => {
    setStatus(
      STATUSES_LIST.find(status => status.value === post.status) || null,
    );
  }, [post]);

  const voters =
    post?.votes.map(vote => ({
      id: vote.vote.author.id,
      avatar: vote.vote.author.image,
    })) || [];

  const handleSetStatus = (status: StatusOption) => {
    setStatus(status);
    updatePostMutation.mutate({
      status: status.value,
    });
  };

  return (
    <Root>
      <Voters voters={voters} />
      <Row>
        <Label>Category</Label>
        <Text size="md">{post.category.name}</Text>
      </Row>
      <Row>
        <Label>Created</Label>
        <Text>{format(new Date(post.createdAt), 'd MMMM yyyy, HH:mm')}</Text>
      </Row>
      <Row>
        <Label>Status</Label>
        {role.isModerator ? (
          <Select<StatusOption>
            value={status}
            items={STATUSES_LIST}
            onSelect={handleSetStatus}
            getLabel={status => status.label}
            getKey={status => status.value}
          />
        ) : (
          <Text>{STATUSES_MAP[post.status].title}</Text>
        )}
      </Row>
    </Root>
  );
};

const Root = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled(Text).attrs({ bold: true, size: 'md' })``;
