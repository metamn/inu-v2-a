import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { useMedia, useTheme } from "../../hooks";

import { SiteInfoPropTypes, SiteInfoDefaultProps } from "../SiteInfo";
import Logo from "../Logo";
import Icon from "../Icon";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * Inherits from SiteInfo
   */
  ...SiteInfoPropTypes,
  /**
   * The theme icon click handler
   */
  themeIconClickHandler: PropTypes.func.isRequired
};

/**
 * Defines the default props
 */
const defaultProps = {
  ...SiteInfoDefaultProps,
  themeIconClickHandler: () => {
    console.log("themeIconClickHandler called");
  }
};

/**
 * Styles the header container
 */
const Container = styled("header")(props => ({
  display: "flex",
  flexWrap: "nowrap",
  alignItems: "center",
  justifyContent: props.isMobile ? "space-between" : "flex-start"
}));

/**
 * Displays the header
 */
const Header = props => {
  const { themeIconClickHandler } = props;

  /**
   * Loads the Sun icon from theme
   */
  const { theme } = useTheme();
  const { icons } = theme;
  const sunIcon = icons.sun;

  /**
   * Checks if we are on a mobile device
   */
  const isMobile = useMedia("mobile");

  /**
   * Hides the line in the logo on mobile screens
   */
  const lineStatus = isMobile ? "invisible" : "visible";

  /**
   * Reduces logo text size on mobile screens
   */
  const logoTextSize = isMobile ? "default" : "large";

  /**
   * Reduces the theme switcher icon size on mobile screens
   */
  const iconSize = isMobile ? 1 : 1.5;

  return (
    <Container isMobile={isMobile}>
      <Logo {...props} lineStatus={lineStatus} textSize={logoTextSize} />
      <Icon size={iconSize} onClick={() => themeIconClickHandler()}>
        {sunIcon}
      </Icon>
    </Container>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
