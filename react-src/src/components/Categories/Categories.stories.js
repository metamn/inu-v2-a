import React from "react";
import { storiesOf } from "@storybook/react";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo-hooks";
import Categories from "./Categories";
import markdownNotes from "./Categories.md";

const client = new ApolloClient({
  uri: "http://localhost/react-wp/graphql"
});

storiesOf("Components/Categories", module)
  .addDecorator(story => (
    <ApolloProvider client={client}>{story()}</ApolloProvider>
  ))
  .addParameters({
    info: {
      propTablesExclude: [ApolloProvider]
    }
  })
  .add("Overview", () => <Categories />, {
    notes: { markdown: markdownNotes }
  });
