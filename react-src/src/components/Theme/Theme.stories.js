import React from "react";
import { storiesOf } from "@storybook/react";

import Theme from "./Theme";
import description from "./Theme.md";

storiesOf("Theme", module)
  .add("Light", () => <Theme colorScheme="light" />, {
    notes: { markdown: description }
  })
  .add("Dark", () => <Theme colorScheme="dark" />, {
    notes: { markdown: description }
  });
