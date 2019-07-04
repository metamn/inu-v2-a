import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { stringify } from "flatted";

import { useTheme } from "./../../hooks";
import { sgColors } from "../../themes/default.js";

import Reset from "../Reset";
import TypographicGrid from "../TypographicGrid";

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
const Color = styled("div")(props => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
}));

/**
 * Styles the color circle
 */
const Circle = styled("span")(props => ({
  display: "flex",
  width: "calc(var(--lem) * 3)",
  height: "calc(var(--lem) * 3)",
  borderRadius: "calc(var(--lem) * 3)",
  backgroundColor: props.color,
  border: props.color === props.current ? "1px solid" : "none"
}));

/**
 * Displays a color swatch
 */
const ColorSwatch = props => {
  const { name, value, currentColors } = props;
  const { backgroundColor } = currentColors;

  return (
    <Color className="color">
      <Circle className="circle" color={value} current={backgroundColor} />
      <span className="text">{name}</span>
    </Color>
  );
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
  const { colorPairs } = theme;

  /**
   * Displays the colors
   */
  const colorSwatches = Object.keys(sgColors).map(key => {
    return (
      <ColorSwatch
        key={key}
        name={key}
        value={sgColors[key]}
        currentColors={colorPairs.default}
      />
    );
  });

  return (
    <>
      <Reset />
      <ThemeContext.Provider value={currentTheme}>
        <TypographicGrid />
        <Container className="Theme" theme={theme}>
          <Colors className="Colors">{colorSwatches}</Colors>
        </Container>
      </ThemeContext.Provider>
    </>
  );
};

Theme.propTypes = propTypes;
Theme.defaultProps = defaultProps;

export default Theme;
export { propTypes, defaultProps };
