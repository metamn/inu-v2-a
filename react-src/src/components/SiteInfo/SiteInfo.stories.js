import React from "react";
import { storiesOf } from "@storybook/react";

import SiteInfo from "./SiteInfo";
import description from "./SiteInfo.md";

storiesOf("SiteInfo", module).add("Overview", () => <SiteInfo />, {
  notes: { markdown: description }
});
