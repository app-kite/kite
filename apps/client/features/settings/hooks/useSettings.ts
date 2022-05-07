import { useQuery } from 'react-query';
import { getSettings } from '../api';

export const useSettings = () => {
  return useQuery('settings', getSettings);
};
