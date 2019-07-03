import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { stringify } from "flatted";

import { useTheme } from "./../../hooks";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The desired color scheme
   */
  colorScheme: PropTypes.string
};

/**
 * Defines the default props
 */
const defaultProps = {
  colorScheme: "light"
};

/**
 * Styles the component container
 */
const Container = styled("div")(props => ({
  ...props.theme.colorPairs.default,
  ...props.theme.fonts.default
}));

/**
 * Styles the colors container
 */
const Colors = styled("div")(props => ({}));

/**
 * Styles the color
 */
const Color = styled("div")(props => ({}));

/**
 * Displays a color swatch
 */
const ColorSwatch = props => {
  const { name, value } = props;
  return name;
};

/**
 * Displays the theme styleguide.
 *
 * Used only with the Storybook.
 */
const Theme = props => {
  const { colorScheme } = props;

  /**
   * Sets up the theme
   */
  const { currentTheme, switchTheme, ThemeContext } = useTheme(colorScheme);

  /**
   * Loads the theme
   */
  const { theme } = currentTheme;

  /**
   * Displays the colors
   */
  const colors = { ...theme.colors };
  const colorSwatches = Object.keys(colors).map(key => {
    return <ColorSwatch name={key} value={colors[key]} />;
  });

  return (
    <ThemeContext.Provider value={currentTheme}>
      <Container className="Theme" theme={theme}>
        <Colors className="Colors">{colorSwatches}</Colors>
      </Container>
    </ThemeContext.Provider>
  );
};

Theme.propTypes = propTypes;
Theme.defaultProps = defaultProps;

export default Theme;
export { propTypes, defaultProps };
