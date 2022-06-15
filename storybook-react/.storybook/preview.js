import { addDecorator } from "@storybook/react";
import { ThemeProvider, theme, CSSReset, Box } from "@chakra-ui/core";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <CSSReset /> <Box m={4}>{story()}</Box>
  </ThemeProvider>
));
