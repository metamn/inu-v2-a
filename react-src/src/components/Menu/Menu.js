import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { stringify } from "flatted";

import { useTheme } from "./../../hooks";

import MenuItem, { MenuItemPropTypes, MenuItemDefaultProps } from "../MenuItem";
import IconToggle, {
  IconTogglePropTypes,
  IconToggleDefaultProps
} from "../IconToggle";
import { Nav as _Nav } from "../SemanticHTML";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * An array of items to be rendered as menu items
   *
   * Example:
   * ```
   * <Menu items={[{id:1, name:'Random'}, {id:2, name:'Contact'}]}
   * ```
   */
  items: PropTypes.arrayOf(PropTypes.shape({ ...MenuItemPropTypes })),
  /**
   * A set of items already rendered as menu items
   *
   * Example:
   * ```
   * <Menu renderedItems=<Categories/>
   * ```
   */
  renderedItems: PropTypes.node,
  /**
   * The active menu item
   */
  activeMenuItem: PropTypes.number,
  /**
   * The menu item click handler
   */
  menuItemClickHandler: PropTypes.func,
  /**
   * The type of the menu: list, dropdown
   */
  menuType: PropTypes.oneOf(["list", "dropdown"]),
  /**
   * The dropdown icons
   */
  dropdownIcons: PropTypes.shape({ ...IconTogglePropTypes })
};

/**
 * Defines the default props
 */
const defaultProps = {
  items: [MenuItemDefaultProps],
  renderedItems: null,
  activeMenuItem: 1,
  menuItemClickHandler: () => {
    console.log("Menu item clicked");
  },
  menuType: "list",
  dropdownIcons: IconToggleDefaultProps
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
 * Sets the status of a menu item
 */
const setMenuItemStatus = props => {
  const { menuItemId, activeMenuItem, menuType } = props;

  switch (menuType) {
    case "dropdown":
      return menuItemId == activeMenuItem ? "inactive" : "hidden";
    case "list":
    default:
      return menuItemId == activeMenuItem ? "active" : "inactive";
  }
};

/**
 * Renders the menu items
 */
const createMenuItems = props => {
  const { items, activeMenuItem, menuType, menuItemClickHandler } = props;

  return items.map((item, index) => {
    const { id } = item;

    const status = setMenuItemStatus({
      menuItemId: id,
      activeMenuItem: activeMenuItem,
      menuType: menuType
    });

    return (
      <MenuItem
        className="menu-item"
        key={index}
        status={status}
        menuItemClickHandler={menuItemClickHandler}
        {...item}
      />
    );
  });
};

/**
 * Sets up the dropdown icons
 */
const setupDropdownIcons = props => {
  const { dropdownIcons, menuType, theme } = props;

  if (menuType !== "dropdown") {
    return null;
  }

  const icon1 = theme.icons.chevronDown;
  const icon2 = theme.icons.chevronUp;

  return <IconToggle {...dropdownIcons} icon1={icon1} icon2={icon2} />;
};

/**
 * Displays the Menu
 */
const Menu = props => {
  const { menuType, renderedItems } = props;
  const { theme } = useTheme();

  /**
   * Sets up the dropdown icons
   */
  const iconToggle = setupDropdownIcons({ theme, ...props });

  /**
   * Renders the menu items
   */
  const menuItems = createMenuItems(props);

  return (
    <Nav title="Menu" className="Menu">
      {iconToggle}
      <List menuType={menuType}>
        {renderedItems}
        {menuItems}
      </List>
    </Nav>
  );
};

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;

export default Menu;
export { setMenuItemStatus };
