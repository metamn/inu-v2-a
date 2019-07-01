import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Categories from "../Categories";
import ListItem from "../ListItem";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Displays the Menu container
 */
const Container = styled("div")(props => ({}));

/**
 * Displays the Menu
 * @param Object props The component properties
 */
const Menu = props => {
  return (
    <Container className="menu">
      <Categories />
      <ListItem>Random</ListItem>
      <ListItem>Contact</ListItem>
    </Container>
  );
};

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;

export default Menu;
