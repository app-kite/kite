import {api} from '../../services/api';
import {Settings} from './types';

export const getSettings = () => {
  return api.url('/api/settings').get().json<Settings>();
}
