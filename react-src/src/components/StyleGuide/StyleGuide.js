import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { stringify } from "flatted";

import { useTheme } from "./../../hooks";
import { sgColors, sgScales } from "../../themes/default.js";
import { modularScale } from "polished";

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
const ColorSwatches = styled("div")(props => ({
  display: "flex",
  flexWrap: "wrap",

  "> *": {
    marginRight: "calc(var(--lem) * 2)",
    marginBottom: "calc(var(--lem) * 2)"
  }
}));

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
 * Styles the text box container
 */
const TextBoxContainer = styled(ColorSwatches)(props => ({}));

/**
 * Styles a text box
 */
const TextBox = styled("div")(props => ({
  ...props.fonts,

  maxWidth: "calc(var(--lem) * 25)",
  border: "1px solid",

  "& .text": {
    ...props.colors,
    ...props.fonts,
    fontSize: props.scale ? modularScale(props.scale) : "1em",
    padding: "var(--lem)"
  },

  "& .details": {
    padding: "var(--lem)",
    borderTop: "1px solid"
  }
}));

/**
 * Styles the color contrast guideline
 */
const MeetsContrastItem = styled("span")(props => ({
  backgroundColor: props.ok ? "green" : "red",
  marginRight: "var(--lem)",
  padding: "calc(var(--lem) / 4)"
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
  const { colorPairs, fonts } = theme;

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
  const colorTexts = Object.keys(colorPairs).map(name => {
    const { contrast, meetsContrast } = colorPairs[name];
    const meetsContrastItems = Object.keys(meetsContrast).map(key => (
      <MeetsContrastItem ok={meetsContrast[key]}>{key}</MeetsContrastItem>
    ));

    return (
      <TextBox
        name={name}
        colors={theme.colorPairs[name]}
        fonts={theme.fonts.default}
      >
        <div class="text">
          Colors don't exist alone yet in pairs, like black on white. All color
          pairs have a contrast ratio set for perfect readability.
        </div>
        <div class="details">
          <p>Name: {name}</p>
          <p>Contrast ratio: {contrast}</p>
          <p>Meets guidelines: {meetsContrastItems}</p>
        </div>
      </TextBox>
    );
  });

  /**
   * Displays the fonts used
   */
  const fontTexts = Object.keys(fonts).map(name => {
    const { fontFamily } = fonts[name];

    return (
      <TextBox
        name={name}
        colors={theme.colorPairs.default}
        fonts={theme.fonts[name]}
      >
        <div class="text">
          Hello, I'm a designer and developer creating user interfaces and
          experiences for the web.
        </div>
        <div class="details">
          <p>Name: {name}</p>
          <p>Font family: {fontFamily}</p>
        </div>
      </TextBox>
    );
  });

  /**
   * Displays the typographic scale
   */
  const scaleTexts = Object.keys(sgScales).map(name => {
    const value = sgScales[name];

    return (
      <TextBox
        name={name}
        colors={theme.colorPairs.default}
        fonts={theme.fonts.default}
        scale={value}
      >
        <div class="text">
          Typographic grid and scale. Different font sizes based on the{" "}
          <a
            href="https://polished.js.org/docs/#modularscale"
            title="Modular Scale"
          >
            Modular Scale.
          </a>
        </div>
        <div class="details">
          <p>Name: {name}</p>
          <p>Modular scale: {value}</p>
        </div>
      </TextBox>
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
    },
    {
      id: "colorpairs",
      name: "Color pairs",
      url: "#colorpairs"
    },
    {
      id: "fonts",
      name: "Fonts",
      url: "#fonts"
    },
    {
      id: "scales",
      name: "Scale",
      url: "#scales"
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

          <ColorSwatches id="colors" className="ColorSwatches">
            {colorSwatches}
          </ColorSwatches>

          <TextBoxContainer id="colorpairs" className="ColorTexts">
            {colorTexts}
          </TextBoxContainer>

          <TextBoxContainer id="fonts" className="FontTexts">
            {fontTexts}
          </TextBoxContainer>

          <TextBoxContainer id="scales" className="Scales">
            {scaleTexts}
          </TextBoxContainer>
        </Container>
      </ThemeContext.Provider>
    </>
  );
};

StyleGuide.propTypes = propTypes;
StyleGuide.defaultProps = defaultProps;

export default StyleGuide;
export { propTypes, defaultProps };
