import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

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

// Styles the link
const Container = styled.a``;

// Displays a HTML link element
const Link = props => {
  const { url, title, children } = props;

  return (
    <Container href={url} title={title}>
      {children}
    </Container>
  );
};

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;
