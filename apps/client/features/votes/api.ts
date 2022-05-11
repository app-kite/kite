import { api } from '../../services/api';
import { Post } from '../posts/types';

type UpdateVotePayload = {
  postId: number;
};

export const updateVote = (payload: UpdateVotePayload) => {
  return api.url('/api/votes').put(payload).json<Post>();
};
