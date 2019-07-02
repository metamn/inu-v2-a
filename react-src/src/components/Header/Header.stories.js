import React from "react";
import { storiesOf } from "@storybook/react";

import Header from "./Header";
import description from "./Header.md";

storiesOf("Header", module).add("Overview", () => <Header />, {
  notes: { markdown: description }
});
