import { useQuery } from 'react-query';
import { getPost } from '../api';

export const usePost = (postId: number) => {
  return useQuery(['post', postId], () => {
    return getPost(postId);
  })
}
