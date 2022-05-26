import {SettingsLayout} from '../../features/settings/components/SettingsLayout';
import styled from 'styled-components';
import {useForm} from 'react-hook-form';
import {useSettings} from '../../features/settings/hooks/useSettings';
import {useUpdateSettings} from '../../features/settings/hooks/useUpdateSettings';
import {dehydrate, QueryClient} from 'react-query';
import {getSettings} from '../../features/settings/api';
import {Button, ButtonVariant, Form as FormInitial, Input} from '@kite/ui';

type FormData = {
  name: string;
};

const SettingsPage = () => {
  const { data: settings } = useSettings();
  const updateSettingsMutation = useUpdateSettings();

  const form = useForm<FormData>({
    defaultValues: {
      name: settings?.name,
    },
  });

  const onSubmit = (data: FormData) => {
    updateSettingsMutation.mutateAsync(data);
  };

  return (
    <SettingsLayout>
      <Form onSubmit={form.handleSubmit(onSubmit)}>
        <Form.FormItem>
          <Form.Label>Organization name:</Form.Label>
          <Input {...form.register('name')} />
        </Form.FormItem>
        <Form.FormItem>
          <Button variant={ButtonVariant.DEFAULT}>Save</Button>
        </Form.FormItem>
      </Form>
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

export default SettingsPage;

const Form = styled(FormInitial)`
  width: 300px;
`;
