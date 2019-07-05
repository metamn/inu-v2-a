import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { stringify } from "flatted";

import { useTheme } from "./../../hooks";
import { sgColors, sgScales } from "../../themes/default.js";
import { modularScale, getContrast, meetsContrastGuidelines } from "polished";

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

  "& a": {
    ...props.link
  },

  "& .text": {
    ...props.colors,
    ...props.fonts,
    ...props.textStyle,
    padding: "var(--lem)"
  },

  "& .with-scale": {
    fontSize: props.scale ? modularScale(props.scale) : "inherit"
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
  const { colorPairs, fonts, textStyles, links } = theme;

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
    const { color, backgroundColor } = colorPairs[name];

    const contrast = getContrast(color, backgroundColor);
    const meetsContrast = meetsContrastGuidelines(color, backgroundColor);

    const meetsContrastItems = Object.keys(meetsContrast).map(key => (
      <MeetsContrastItem ok={meetsContrast[key]}>{key}</MeetsContrastItem>
    ));

    return (
      <TextBox
        name={name}
        colors={theme.colorPairs[name]}
        fonts={theme.fonts.default}
        textStyle={theme.textStyles.default}
        link={theme.links.default}
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
        textStyle={theme.textStyles.default}
        link={theme.links.default}
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
        textStyle={theme.textStyles.default}
        scale={value}
        link={theme.links.default}
      >
        <div class="text with-scale">
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
   * Displays the link styles
   */
  const linkTexts = Object.keys(links).map(name => {
    const value = links[name];

    return (
      <TextBox
        name={name}
        colors={theme.colorPairs.default}
        fonts={theme.fonts.default}
        textStyle={theme.textStyles.default}
        link={value}
      >
        <div class="text">
          <a href="#" title="link">
            This is the {name} link style. No decoration just on hover.
          </a>
        </div>
        <div class="details">
          <p>Name: {name}</p>
        </div>
      </TextBox>
    );
  });

  /**
   * Displays the text styles
   */
  const textStyleTexts = Object.keys(textStyles).map(name => {
    const value = textStyles[name];

    return (
      <TextBox
        name={name}
        colors={theme.colorPairs.default}
        fonts={theme.fonts.default}
        textStyle={value}
        link={theme.links.default}
      >
        <div class="text">
          This is the default text. With a high contrast background and a modern
          typeface with extra letter spacing it should look electric, vibrant,
          energizing on all displays.
        </div>
        <div class="details">
          <p>Name: {name}</p>
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
    },
    {
      id: "links",
      name: "Links",
      url: "#links"
    },
    {
      id: "text-styles",
      name: "Text styles",
      url: "#text-styles"
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

          <TextBoxContainer id="links" className="Links">
            {linkTexts}
          </TextBoxContainer>

          <TextBoxContainer id="text-styles" className="textStyles">
            {textStyleTexts}
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
