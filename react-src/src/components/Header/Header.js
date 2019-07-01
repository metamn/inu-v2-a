import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FiSun } from "react-icons/fi";

import Logo from "../Logo";
import Icon from "../Icon";
import SiteInfo from "../SiteInfo";

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

  return (
    <Container>
      <Logo {...props} />
      <Icon>
        <FiSun onClick={() => themeIconClickHandler()} />
      </Icon>
    </Container>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
