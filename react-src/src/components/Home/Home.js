import React from "react";
import styled from "styled-components";
import gql from "graphql-tag";
import WebFont from "webfontloader";
//import { stringify } from "flatted";

import { useTheme, useData } from "./../../hooks";

import Reset from "../Reset";
import TypographicGrid from "../TypographicGrid";

import SiteInfo, {
  propTypes as SiteInfoPropTypes,
  defaultProps as SiteInfoDefaultProps
} from "../SiteInfo";
import { Section as _Section } from "../SemanticHTML";
import Header from "../Header";

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
 */
const propTypes = {
  ...SiteInfoPropTypes
};

/**
 * Defines the default props
 */
const defaultProps = {
  ...SiteInfoDefaultProps
};

/**
 * Defines the query
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
 */
const Home = props => {
  /**
   * Sets up theming
   */
  const { currentTheme, switchTheme, ThemeContext } = useTheme();
  //console.log("home");

  /**
   * Sets up site info
   */
  const siteInfo = useData(props, query, "generalSettings");

  /**
   * Renders the component
   */
  return (
    <>
      <Reset />
      <SiteInfo {...siteInfo} />
      <ThemeContext.Provider value={currentTheme}>
        <TypographicGrid />
        <Section title="Home" className="home" theme={currentTheme.theme}>
          <Header {...siteInfo} themeIconClickHandler={switchTheme} />
        </Section>
      </ThemeContext.Provider>
    </>
  );
};

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;
