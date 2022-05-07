import { useMutation } from 'react-query';
import wretch from 'wretch';

type UpdateSettingsPayload = {
  name: string;
};

export const useUpdateSettings = () => {
  return useMutation('settings', (payload: UpdateSettingsPayload) => {
    return wretch('/api/settings').post(payload);
  });
};
