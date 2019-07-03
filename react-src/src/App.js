import React from "react";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo-hooks";

//import Home from "./components/Home";
import Theme from "./components/Theme";

const client = new ApolloClient({
  uri: "http://localhost/react-wp/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <Theme />
  </ApolloProvider>
);

export default App;
