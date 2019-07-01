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
 * @param Object props The component properties
 */
const Template = props => {
  return <Container>"Template"</Container>;
};

Template.propTypes = propTypes;
Template.defaultProps = defaultProps;

export default Template;
