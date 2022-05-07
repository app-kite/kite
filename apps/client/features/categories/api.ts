import {api} from '../../services/api';
import {Category} from './type';

export const getCategories = () => {
  return api.url('/api/categories').get().json<Category[]>();
}
