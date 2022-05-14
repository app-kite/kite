import React from 'react';
import { addDecorator } from '@storybook/react';
import { light, ThemeProvider } from '@kite/theme';
import { ModalProvider } from '../packages/ui';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(storyFn => (
  <ThemeProvider theme={light}>
    <ModalProvider>{storyFn()}</ModalProvider>
  </ThemeProvider>
));
