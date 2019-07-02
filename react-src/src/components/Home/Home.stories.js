import React from "react";
import { storiesOf } from "@storybook/react";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo-hooks";

import Home from "./Home";
import markdownNotes from "./Home.md";

const client = new ApolloClient({
  uri: "http://localhost/react-wp/graphql"
});

storiesOf("Components/Home", module)
  .addDecorator(story => (
    <ApolloProvider client={client}>{story()}</ApolloProvider>
  ))
  .addParameters({
    info: {
      propTablesExclude: [ApolloProvider]
    }
  })
  .add("Overview", () => <Home />, {
    notes: { markdown: markdownNotes }
  });
