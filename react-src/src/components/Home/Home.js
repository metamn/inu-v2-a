import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import gql from "graphql-tag";
import WebFont from "webfontloader";

import { useQuery } from "./../../hooks";
import {
  ThemeContext,
  switchThemeTo,
  switchThemeFrom
} from "../../themes/default.js";
import { useLocalStorage, usePrefersDarkMode } from "../../hooks";

import Reset from "../Reset";
import TypographicGrid from "../TypographicGrid";
import SiteInfo from "../SiteInfo";
import Logo from "../Logo";

// Loads web fonts
// NOTE: When changing font also the `theme` has to be updated
WebFont.load({
  google: {
    families: ["Major+Mono+Display"]
  }
});

// Defines the prop types of the component
const Props = {
  ...SiteInfo.propTypes
};

// Defines the default props
const DefaultProps = {
  ...SiteInfo.defaultProps
};

// Every component must have a className otherwise it can't be re-styled with `styled-components`
// This is not a prop which can be passed over to child components then overwrite their classname prop ...
const ClassName = "home";

// Defines the query
const query = gql`
  query siteInfo {
    generalSettings {
      ...SiteInfoSettings
    }
  }
  ${SiteInfo.fragments.settings}
`;

// Styles the main container
const Container = styled.div`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.default};

  display: flex;
  flex-direction: column;

  min-height: 100vh;
`;

// Displays the Homepage
const Home = props => {
  // Theming
  //
  // - Checks if the user / browser prefers dark mode
  // - Checks if the browser has stored a preference for a theme
  // - Based on above the theme context can be set up with the desired theme
  // - Then saved into a state var to make it switchable
  const prefersDarkMode = usePrefersDarkMode();
  const [currentThemeSaved, setCurrentThemeSaved] = useLocalStorage(
    "current-theme"
  );
  const starterColorScheme =
    typeof currentThemeSaved !== "undefined"
      ? currentThemeSaved
      : prefersDarkMode
      ? "dark"
      : "light";

  let themeContext = useContext(ThemeContext);
  themeContext = switchThemeTo(starterColorScheme);
  const [currentTheme, setCurrentTheme] = useState(themeContext);

  // Site info
  //
  // This is a good example how Hooks work in React
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
      <SiteInfo {...siteInfo} />
      <ThemeContext.Provider value={currentTheme}>
        <TypographicGrid />
        <Container className={ClassName} theme={currentTheme.theme}>
          <Logo {...siteInfo} />
        </Container>
      </ThemeContext.Provider>
    </>
  );
};

Home.propTypes = Props;
Home.defaultProps = DefaultProps;

export default Home;
