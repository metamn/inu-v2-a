import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

/**
 * Defines the prop types
 */
const propTypes = {
  children: PropTypes.any.isRequired
};

/**
 * Defines the default props
 */
const defaultProps = {
  children: "List item"
};

/**
 * Displays the ListItem container
 */
const Container = styled("div")(props => ({}));

/**
 * Displays the ListItem
 * @param Object props The component properties
 */
const ListItem = props => {
  const { children } = props;
  return <Container className="list-item">{children}</Container>;
};

ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;

export default ListItem;
