import { Descendant } from '@kite/ui';
import { api } from '../../services/api';
import { Post } from './types';

export type CreatePostPayload = {
  title: string;
  text: Descendant[];
  categoryId: number;
};

export const createPost = (payload: CreatePostPayload) => {
  return api.url('/api/posts').post(payload).json<Post>();
};
