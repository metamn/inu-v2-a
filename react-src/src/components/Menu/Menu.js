import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { stringify } from "flatted";

import MenuItem, { MenuItemPropTypes, MenuItemDefaultProps } from "../MenuItem";
import { Nav as _Nav } from "../SemanticHTML";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * An array of items to be rendered as menu items
   */
  items: PropTypes.arrayOf(MenuItemPropTypes),
  /**
   * An set of items already rendered as menu items
   */
  renderedItems: PropTypes.node
};

/**
 * Defines the default props
 */
const defaultProps = {
  items: [MenuItemDefaultProps],
  renderedItems: null
};

/**
 * Styles the Menu container
 */
const Nav = styled(_Nav)(props => ({}));

/**
 * Styles the list container
 */
const List = styled("ul")(props => ({}));

/**
 * Displays the Menu
 */
const Menu = props => {
  const { items, renderedItems } = props;

  const menuItems = items.map((item, index) => {
    return <MenuItem className="menu-item" key={index} {...item} />;
  });

  return (
    <Nav title="Menu" className="Menu">
      <List>
        {renderedItems}
        {menuItems}
      </List>
    </Nav>
  );
};

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;

export default Menu;
