import React from "react";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo-hooks";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import StyleGuide from "./components/StyleGuide";

const client = new ApolloClient({
  uri: "http://localhost/react-wp/graphql"
});

// A base name has to be set up on localhost
const baseName = process.env.NODE_ENV === "development" ? "/react-wp" : "";

// NOTE: root path has to be the last declaration. Otherwise also `/styleguide` will render `Home`
const App = () => (
  <Router basename={baseName}>
    <Switch>
      <Route path="/styleguide" component={StyleGuide} />
      <ApolloProvider client={client}>
        <Route path="/" component={Home} />
      </ApolloProvider>
    </Switch>
  </Router>
);

export default App;
