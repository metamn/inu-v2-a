import React from "react";
import { storiesOf } from "@storybook/react";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo-hooks";
import Home from "./Home";
import markdownNotes from "./Home.md";

const client = new ApolloClient({
  uri: "http://localhost/react-wp/graphql"
});

storiesOf("Components/Home", module).add(
  "Overview",
  () => (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  ),
  {
    notes: { markdown: markdownNotes }
  }
);
