import React, { useEffect } from "react";
import gql from "graphql-tag";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Helmet } from "react-helmet";
import { stringify } from "flatted";

import { useQuery } from "./../../hooks";

import Reset from "../Reset";
import TypographicGrid from "../TypographicGrid";

// Global settings
const Props = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string
};

// Default global settings
const DefaultProps = {
  title: "Ioan Chivu xx",
  description: "Photo traveler xx",
  url: "http://inu.ro"
};

// Query for site info
const query = gql`
  query siteInfo {
    generalSettings {
      title
      url
      description
    }
  }
`;

const Home = props => {
  // Set up the site info
  let { title, description } = props;

  const { data } = useQuery(query);

  useEffect(() => {
    console.log("data:" + stringify(data));
    if (data.generalSettings) {
      let { title, description } = data.generalSettings;
      console.log("title2:" + title);
    }
  });

  return (
    <>
      <Reset />
      <TypographicGrid
        displayVerticalRhytm={false}
        displayHorizontalRhytm={false}
        numberOfHorizontalLines={100}
        numberOfVerticalLines={100}
        lineColor="#666"
      />
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
    </>
  );
};

Home.propTypes = Props;
Home.defaultProps = DefaultProps;

export default Home;
