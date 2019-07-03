import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Displays the Template container
 */
const Container = styled("div")(props => ({}));

/**
 * Displays the Template
 */
const Template = props => {
  return <Container className="template">Template</Container>;
};

Template.propTypes = propTypes;
Template.defaultProps = defaultProps;

export default Template;
export { propTypes, defaultProps };
