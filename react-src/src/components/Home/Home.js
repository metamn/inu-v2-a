import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import styled, { css } from "styled-components";
import { Helmet } from "react-helmet";
import { stringify } from "flatted";

import { useQuery } from "./../../hooks";

import Reset from "../Reset";
import TypographicGrid from "../TypographicGrid";

// Defines the types of the global settings
const Props = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string
};

// Defines the default values for the global settings
const DefaultProps = {
  title: "Ioan Chivu",
  description: "Photo traveler",
  url: "http://inu.ro"
};

// Queries the database for site information
const query = gql`
  query siteInfo {
    generalSettings {
      title
      description
      url
    }
  }
`;

// Displays site info in the document `<head>` with Helmet
// NOTE: use this method instead of manually edit `public/index.php`
const SiteInfo = props => {
  const { title, description, url } = props;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

// Displays the Homepage
const Home = props => {
  // Setting up the site info is a good example how Hooks work in React
  // - The db query is async which means we'll have to wait for the real data
  // - Meantime we set up a state variable with default values coming from `props`
  // - Then we'll update the state var in `useEffect` when the data becomes ready
  // - And the `<SiteInfo/>` component will be re-rendered automatically
  //
  // This is also a good example for typechecking / props usage
  // - Throughout the entire code we pass the same props structure:
  //  - `useState(props)`
  //  - `useQuery(query)`
  //  - `setSiteInfo(data.generalSettings)`
  //  - `<SiteInfo {...siteInfo} />`
  // - And we decompose props only when they are finally displayed:
  //  - `const { title, description, url } = props;`

  const [siteInfo, setSiteInfo] = useState(props);
  const { data } = useQuery(query);

  useEffect(
    () => {
      if (data.generalSettings) {
        setSiteInfo(data.generalSettings);
      }
    },
    [data.generalSettings]
  );

  return (
    <>
      <Reset />
      <TypographicGrid />
      <SiteInfo {...siteInfo} />
    </>
  );
};

Home.propTypes = Props;
Home.defaultProps = DefaultProps;

export default Home;
