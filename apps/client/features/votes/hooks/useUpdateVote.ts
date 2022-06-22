import { useMutation } from 'react-query';
import { updateVote } from '../api';

export const useUpdateVote = () => {
  return useMutation(updateVote);
};
