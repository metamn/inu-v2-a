import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { stringify } from "flatted";

import { useTheme } from "./../../hooks";
import { sgColors } from "../../themes/default.js";

import Reset from "../Reset";
import TypographicGrid from "../TypographicGrid";

import SiteInfo, { propTypes as SiteInfoPropTypes } from "../SiteInfo";
import Logo from "../Logo";
import Menu2 from "../Menu2";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The desired color scheme
   */
  colorScheme: PropTypes.string,
  /**
   * Page title and url
   */
  ...SiteInfoPropTypes
};

/**
 * Defines the default props
 */
const defaultProps = {
  colorScheme: "light",
  title: "Styleguide",
  description: "for inu.ro",
  url: "http://inu.ro/styleguide"
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
 * Displays the styleguide.
 */
const StyleGuide = props => {
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

  /**
   * Displays the menu
   */
  const menuItems = [
    {
      id: "colors",
      name: "Colors",
      url: "#colors"
    }
  ];

  return (
    <>
      <Reset />
      <SiteInfo {...props} />
      <ThemeContext.Provider value={currentTheme}>
        <TypographicGrid />
        <Container className="StyleGuide" theme={theme}>
          <Logo {...props} />
          <Menu2 items={menuItems} />
          <Colors className="Colors">{colorSwatches}</Colors>
        </Container>
      </ThemeContext.Provider>
    </>
  );
};

StyleGuide.propTypes = propTypes;
StyleGuide.defaultProps = defaultProps;

export default StyleGuide;
export { propTypes, defaultProps };
