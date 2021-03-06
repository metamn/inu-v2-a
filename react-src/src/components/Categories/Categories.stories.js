import React from "react";
import { storiesOf } from "@storybook/react";

import Categories from "./Categories";
import description from "./Categories.md";

storiesOf("Categories", module).add("Overview", () => <Categories />, {
  notes: { markdown: description }
});
