import {useMutation} from 'react-query';
import {createPost} from '../api';

export const useCreatePost = () => {
  return useMutation('posts', createPost);
}
