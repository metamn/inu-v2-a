import React from "react";
import gql from "graphql-tag";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Helmet } from "react-helmet";

import Reset from "../Reset";
import TypographicGrid from "../TypographicGrid";

// Global settings
const Props = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
  siteURL: PropTypes.string
};

// Default global settings
const DefaultProps = {
  siteTitle: "Ioan Chivu",
  siteDescription: "Photo traveler",
  siteURL: "http://inu.ro"
};

// Query for site info
const Query = gql`
  query allSettings {
    allSettings {
      generalSettingsTitle
      generalSettingsUrl
      generalSettingsDescription
    }
  }
`;

const Home = props => {
  const { siteTitle, siteDescription } = props;

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
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>
    </>
  );
};

Home.propTypes = Props;
Home.defaultProps = DefaultProps;

export default Home;
