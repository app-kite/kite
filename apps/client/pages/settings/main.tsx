import { SettingsLayout } from '../../features/settings/components/SettingsLayout';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useSettings } from '../../features/settings/hooks/useSettings';
import { useUpdateSettings } from '../../features/settings/hooks/useUpdateSettings';
import { dehydrate, QueryClient } from 'react-query';
import { getSettings } from '../../features/settings/api';

type FormData = {
  name: string;
};

const SettingsMain = () => {
  const { data } = useSettings();
  const updateSettingsMutation = useUpdateSettings();

  const form = useForm<FormData>({
    defaultValues: {
      name: data?.name,
    },
  });

  const onSubmit = (data: FormData) => {
    updateSettingsMutation.mutateAsync(data);
  };

  return (
    <SettingsLayout>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Fieldset>
          <label>
            <div>Organization name:</div>
            <input {...form.register('name')} />
          </label>
        </Fieldset>
        <Fieldset>
          <button>Save</button>
        </Fieldset>
      </form>
    </SettingsLayout>
  );
};

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('settings', getSettings);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const Fieldset = styled.fieldset`
  border: none;
`;

export default SettingsMain;
