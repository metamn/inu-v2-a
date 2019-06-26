import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Helmet } from "react-helmet";

import Reset from "../Reset";
import TypographicGrid from "../TypographicGrid";

const Props = {
  //
};

const DefaultProps = {
  //
};

const Home = () => {
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
        <title>My Title</title>
        <meta name="description" content="Portfolio" />
      </Helmet>
    </>
  );
};

Home.propTypes = Props;
Home.defaultProps = DefaultProps;

export default Home;
