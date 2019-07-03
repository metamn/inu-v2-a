import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FiSun, FiMenu, FiX } from "react-icons/fi";

import { useMedia } from "../../hooks";

import {
  propTypes as SiteInfoPropTypes,
  defaultProps as SiteInfoDefaultProps
} from "../SiteInfo";
import Logo from "../Logo";
import Icon from "../Icon";
import IconToggle from "../IconToggle";
import Menu from "../Menu";

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
const Container = styled("header")(props => ({}));

/**
 * Displays the header
 */
const Header = props => {
  const { themeIconClickHandler } = props;

  /**
   * Checks if we are on a mobile device
   */
  const isMobile = useMedia("mobile");

  /**
   * Hides the line in the logo on mobile screens
   */
  const lineStatus = isMobile ? "invisible" : "visible";

  /**
   * Displays the mobile icon toggler on mobile screens
   */
  const iconToggleStatus = isMobile ? "active" : "hidden";

  /**
   * Defines the mobile menu toggle icons
   */
  const icon1 = <FiMenu onClick={() => {}} />;
  const icon2 = <FiX onClick={() => {}} />;
  //console.log("header");

  return (
    <Container>
      <Logo {...props} lineStatus={lineStatus} />
      <IconToggle icon1={icon1} icon2={icon2} status={iconToggleStatus} />
      <Icon>
        <FiSun onClick={() => themeIconClickHandler()} />
      </Icon>
      <Menu />
    </Container>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
