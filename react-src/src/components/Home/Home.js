import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import gql from "graphql-tag";

import { useQuery } from "./../../hooks";

import Reset from "../Reset";
import TypographicGrid from "../TypographicGrid";
import SiteInfo from "../SiteInfo";
import Logo from "../Logo";

/** Defines the prop types of the component */
const Props = {
  ...SiteInfo.propTypes
};

// Defines the default props
const DefaultProps = {
  ...SiteInfo.defaultProps
};

// Defines the query
const query = gql`
  query siteInfo {
    generalSettings {
      ...SiteInfoSettings
    }
  }
  ${SiteInfo.fragments.settings}
`;

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
      <Logo {...siteInfo} />
    </>
  );
};

Home.propTypes = Props;
Home.defaultProps = DefaultProps;

export default Home;
