import {addDecorator} from "@storybook/react";
import "../styles/globals.css";
import {ThemeProvider} from "styled-components";
import {light} from "@kite/theme/light";

export const parameters = {
  actions: {argTypesRegex: "^on[A-Z].*"},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator((storyFn) => (
  <ThemeProvider theme={light}>{storyFn()}</ThemeProvider>
))
