import { api } from '../../services/api';
import { Category } from './type';

export type CreateCategoryPayload = {
  name: string;
};

export type DeleteCategoryPayload = {
  id: number;
  newCategoryId: number;
}

export const getCategories = () => {
  return api.url('/api/categories').get().json<Category[]>();
};

export const createCategory = (body: CreateCategoryPayload) => {
  return api.url('/api/categories').post(body).json<Category>();
};

export const deleteCategory = (id: number, newCategoryId: number) => {
  return api.url(`/api/categories/${id}`).delete({ newCategoryId }).json();
};
