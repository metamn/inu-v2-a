import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FiSun, FiMenu, FiX } from "react-icons/fi";

import { useMedia } from "../../hooks";

import SiteInfo from "../SiteInfo";
import Logo from "../Logo";
import Icon from "../Icon";
import IconToggle from "../IconToggle";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * Inherits from SiteInfo
   * @type Object
   */
  ...SiteInfo.propTypes,
  /**
   * The theme icon click handler
   * @type Function
   */
  themeIconClickHandler: PropTypes.func.isRequired
};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Displays the header container
 */
const Container = styled("header")(props => ({}));

/**
 * Displays the header
 * @param Object props The component properties
 */
const Header = props => {
  const { themeIconClickHandler } = props;

  const isMobile = useMedia("mobile");
  const lineStatus = isMobile ? "invisible" : "visible";
  const iconToggleStatus = isMobile ? "active" : "hidden";

  const icon1 = <FiMenu onClick={() => {}} />;
  const icon2 = <FiX onClick={() => {}} />;
  console.log("header");

  return (
    <Container>
      <Logo {...props} lineStatus={lineStatus} />
      <IconToggle icon1={icon1} icon2={icon2} status={iconToggleStatus} />
      <Icon>
        <FiSun onClick={() => themeIconClickHandler()} />
      </Icon>
    </Container>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
