import {InfiniteData, useMutation, useQueryClient} from 'react-query';
import {updateVote} from '../api';
import {Post} from '../../posts/types';
import {ListPostPayload} from '../../posts/api';

export const useUpdateVote = () => {
  const queryClient = useQueryClient();

  return useMutation(updateVote, {
    onSuccess(data) {
      queryClient.setQueryData<InfiniteData<ListPostPayload> | undefined>('posts', previousPosts => {
        if (!previousPosts) {
          return previousPosts;
        }

        return {
          ...previousPosts,
          pages: previousPosts.pages.map(page => ({
            ...page,
            posts: page.posts.map(post => post.id === data.id ? data : post)
          }))
        }
      });
    },
  });
};
