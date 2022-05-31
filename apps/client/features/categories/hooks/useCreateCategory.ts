import { useMutation } from 'react-query';
import { createCategory } from '../api';

export const useCreateCategory = () => {
  return useMutation('categories', createCategory);
};
