import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import Home from "./Home";
import description from "./Home.md";

storiesOf("Components/Home", module).add("Overview", () => <Home />, {
  info: {
    inline: true,
    text: description
  }
});
