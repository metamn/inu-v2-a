import React from "react";
import { storiesOf } from "@storybook/react";

import Menu2 from "./Menu2";
import description from "./Menu2.md";

storiesOf("Menu2", module).add("Overview", () => <Menu2 />, {
  notes: { markdown: description }
});
