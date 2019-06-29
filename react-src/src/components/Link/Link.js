import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { ThemeContext } from "../../themes/default.js";

/**
 * Defines the prop types of the component
 * @type Object
 */
const propTypes = {
  /**
   * The link url
   */
  url: PropTypes.string,
  /**
   * The link title
   */
  title: PropTypes.string,
  /**
   * The link content
   */
  children: PropTypes.node
};

/**
 * Defines the default props
 * @type Object
 */
const defaultProps = {
  url: "http://example.com",
  title: "http://example.com",
  children: "http://example.com"
};

/**
 * Defines the component name
 * @type String
 */
const className = "link";

// Styles the default link
const DefaultLink = css`
  text-decoration: none;

  ${props =>
    props.theme.colors.text &&
    css`
      color: ${props.theme.colors.text};
    `};

  &:hover {
    text-decoration: line-through;
  }
`;

// Styles the link
const Container = styled.a`
  ${DefaultLink}
`;

/**
 * Displays a HTML link element
 * @param Object props The component properties
 */
const Link = props => {
  const { children } = props;
  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;

  return (
    <Container className={className} theme={theme} {...props}>
      {children}
    </Container>
  );
};

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;
