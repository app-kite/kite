import { useMutation } from 'react-query';
import {deleteCategory, DeleteCategoryPayload} from '../api';

export const useDeleteCategory = () => {
  return useMutation('categories', (payload: DeleteCategoryPayload) => {
    return deleteCategory(payload.id, payload.newCategoryId);
  });
};
