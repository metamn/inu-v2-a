import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { ThemeContext } from "../../themes/default.js";

// Defines the prop types of the component
const propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node
};

// Defines the default props
const defaultProps = {
  url: "http://example.com",
  title: "http://example.com",
  children: "http://example.com"
};

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

// Displays a HTML link element
const Link = props => {
  const { url, title, children } = props;
  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;

  return (
    <Container theme={theme} href={url} title={title}>
      {children}
    </Container>
  );
};

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;
