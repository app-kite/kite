import React from 'react';
import { addDecorator } from '@storybook/react';
import { light, ThemeProvider } from '@kite/theme';

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
  <ThemeProvider theme={light}>{storyFn()}</ThemeProvider>
));
