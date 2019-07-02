import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo-hooks";
import Categories from "./Categories";
import markdownNotes from "./Categories.md";

const client = new ApolloClient({
  uri: "http://localhost/react-wp/graphql"
});

storiesOf("Components/Categories", module)
  .addDecorator(withInfo)
  .add(
    "Overview",
    () => (
      <ApolloProvider client={client}>
        <Categories />
      </ApolloProvider>
    ),
    {
      notes: { markdown: markdownNotes }
    }
  );
