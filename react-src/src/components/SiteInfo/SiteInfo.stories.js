import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import SiteInfo from "./SiteInfo";
import description from "./SiteInfo.md";

storiesOf("Components/SiteInfo", module).add("Overview", () => <SiteInfo />, {
  info: {
    inline: true,
    text: description
  }
});
