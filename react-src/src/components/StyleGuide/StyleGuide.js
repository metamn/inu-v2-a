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
 * Styles the color swatches
 */
const ColorSwatches = styled("div")(props => ({}));

/**
 * Styles the color swatch
 */
const ColorSwatchContainer = styled("div")(props => ({
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
 * Styles the color text container
 */
const ColorTexts = styled("div")(props => ({}));

/**
 * Styles the color text
 */
const ColorText = styled("div")(props => ({
  maxWidth: "calc(var(--lem) * 25)",
  border: "1px solid",

  "& .text": {
    ...props.theme.colorPairs[props.name],
    padding: "var(--lem)"
  },

  "& .name": {
    padding: "var(--lem)",
    borderTop: "1px solid"
  }
}));

/**
 * Displays a color swatch
 */
const ColorSwatch = props => {
  const { name, value, currentColors } = props;
  const { backgroundColor } = currentColors;

  return (
    <ColorSwatchContainer className="color">
      <Circle className="circle" color={value} current={backgroundColor} />
      <span className="text">{name}</span>
    </ColorSwatchContainer>
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
  const colorSwatches = Object.keys(sgColors).map(key => (
    <ColorSwatch
      key={key}
      name={key}
      value={sgColors[key]}
      currentColors={colorPairs.default}
    />
  ));

  /**
   * Displays the color pairs
   */
  const colorTexts = Object.keys(colorPairs).map(name => (
    <ColorText name={name} theme={theme}>
      <div class="text">
        Colors don't exist alone yet in pairs, like black on white. All color
        pairs have a contrast ratio set for perfect readability.
      </div>
      <div class="name">{name}</div>
    </ColorText>
  ));

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

          <ColorSwatches className="ColorSwatches">
            {colorSwatches}
          </ColorSwatches>

          <ColorTexts className="ColorTexts">{colorTexts}</ColorTexts>
        </Container>
      </ThemeContext.Provider>
    </>
  );
};

StyleGuide.propTypes = propTypes;
StyleGuide.defaultProps = defaultProps;

export default StyleGuide;
export { propTypes, defaultProps };
