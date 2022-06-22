import { Descendant } from '@kite/ui';
import { api } from '../../services/api';
import { Post, PostStatus } from './types';

export type ListPostPayload = {
  nextId: number;
  posts: Post[];
};

export type CreatePostPayload = {
  title: string;
  text: Descendant[];
  categoryId: number;
};

export type UpdatePostPayload = Partial<{
  status: PostStatus;
}>;

export const createPost = (payload: CreatePostPayload) => {
  return api.url('/api/posts').post(payload).json<Post>();
};

export const listPosts = (cursor: number) => {
  return api.url(`/api/posts?cursor=${cursor}`).get().json<ListPostPayload>();
};

export const getPost = (id: number) => {
  return api.url(`/api/posts/${id}`).get().json<Post>();
};

export const updatePost = (id: number, post: UpdatePostPayload) => {
  return api.url(`/api/posts/${id}`).patch(post).json<Post>();
};
