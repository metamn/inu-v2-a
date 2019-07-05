import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import MenuItem, { MenuItemPropTypes, MenuItemDefaultProps } from "../MenuItem";
import { Nav as _Nav } from "../SemanticHTML";

/**
 * Defines the prop types
 */
const propTypes = {
  items: PropTypes.arrayOf(MenuItemPropTypes).isRequired
};

/**
 * Defines the default props
 */
const defaultProps = {
  items: [MenuItemDefaultProps]
};

/**
 * Styles the component container
 */
const Nav = styled(_Nav)(props => ({}));

/**
 * Styles the list container
 */
const List = styled("ul")(props => ({}));

/**
 * Displays the component
 */
const Menu2 = props => {
  const { items } = props;

  const menuItems = items.map((item, index) => (
    <MenuItem className="menu-item" key={index} {...item}>
      {item}
    </MenuItem>
  ));

  return (
    <Nav title="Menu" className="Menu2">
      <List>{menuItems}</List>
    </Nav>
  );
};

Menu2.propTypes = propTypes;
Menu2.defaultProps = defaultProps;

export default Menu2;
export { propTypes, defaultProps };
