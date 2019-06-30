import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import gql from "graphql-tag";
import WebFont from "webfontloader";
import { FiSun } from "react-icons/fi";

import { useQuery, useTheme, useData } from "./../../hooks";
import { stringify } from "flatted";

import Reset from "../Reset";
import TypographicGrid from "../TypographicGrid";
import SiteInfo from "../SiteInfo";
import Logo from "../Logo";
import Icon from "../Icon";
import { Section as _Section } from "../SemanticHTML";

/**
 * Loads web fonts
 * NOTE: When changing font also the `theme` has to be updated
 */
WebFont.load({
  google: {
    families: ["Major+Mono+Display"]
  }
});

/**
 * Defines the prop types of the component
 * @type Object
 */
const propTypes = {
  ...SiteInfo.propTypes
};

/**
 * Defines the default props
 * @type Object
 */
const defaultProps = {
  ...SiteInfo.defaultProps
};

/**
 * Defines the query
 * @type {[type]}
 */
const query = gql`
  query siteInfo {
    generalSettings {
      ...SiteInfoSettings
    }
  }
  ${SiteInfo.fragments.settings}
`;

/**
 * Styles the main container
 * Wherever possible the object notation is used to enable composition by spreading and reduce the ugly, long `{$props => ...}` syntax with template literals
 *
 * @type {[type]}
 */
const Section = styled(_Section)(props => ({
  ...props.theme.colorPairs.default,
  ...props.theme.fonts.default,
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh"
}));

/**
 * Displays the Homepage
 * @param Object props The component properties
 */
const Home = props => {
  // Theming
  const { currentTheme, switchTheme, ThemeContext } = useTheme();

  // Site info
  const siteInfo = useData(props, query, "generalSettings");

  return (
    <>
      <Reset />
      <SiteInfo {...siteInfo} />
      <ThemeContext.Provider value={currentTheme}>
        <TypographicGrid />
        <Section title="Home" className="home" theme={currentTheme.theme}>
          <Logo {...siteInfo} />
          <Icon>
            <FiSun onClick={() => switchTheme()} />
          </Icon>
        </Section>
      </ThemeContext.Provider>
    </>
  );
};

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;
