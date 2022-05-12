import {InfiniteData, useMutation, useQueryClient} from 'react-query';
import {updateVote} from '../api';
import {Post} from '../../posts/types';
import {ListPostPayload} from '../../posts/api';

export const useUpdateVote = () => {
  const queryClient = useQueryClient();

  return useMutation(updateVote);
};
