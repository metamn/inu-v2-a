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
 * Displays the ListItem container
 */
const Container = styled("div")(props => ({}));

/**
 * Displays the ListItem
 * @param Object props The component properties
 */
const ListItem = props => {
  return <Container className="list-item">ListItem</Container>;
};

ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;

export default ListItem;
