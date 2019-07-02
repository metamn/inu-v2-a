import { addParameters, addDecorator, configure } from "@storybook/react";
import theme from "./theme";

// Console imports ... more complicated than the rest
import { withConsole } from "@storybook/addon-console";
import { setConsoleOptions } from "@storybook/addon-console";
import "@storybook/addon-console";

// Info / JSDoc imports
// This must be first among all settings: https://github.com/storybookjs/storybook/issues/4801#issuecomment-452214479
import { withInfo } from "@storybook/addon-info";
addDecorator(
  withInfo({
    header: false,
    source: false
  })
);

// General settings
addParameters({
  options: {
    theme: theme,
    panelPosition: "right"
  },
  backgrounds: [
    { name: "default", value: "#F6F9FC", default: true },
    { name: "black", value: "#000" }
  ]
});

// Console settings
setConsoleOptions({
  panelExclude: []
});
addDecorator((storyFn, context) => withConsole()(storyFn)(context));

// Load stories into the sidebar
const req = require.context("../src", true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
