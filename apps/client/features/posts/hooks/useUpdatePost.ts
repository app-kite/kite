import { useMutation } from 'react-query';
import { updatePost, UpdatePostPayload } from '../api';

export const useUpdatePost = (postId: number) => {
  return useMutation((post: UpdatePostPayload) => updatePost(postId, post));
};
