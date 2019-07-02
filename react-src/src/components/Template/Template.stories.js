import React from "react";
import { storiesOf } from "@storybook/react";

import Template from "./Template";
import description from "./Template.md";

storiesOf("Template", module).add("Overview", () => <Template />, {
  notes: { markdown: description }
});
