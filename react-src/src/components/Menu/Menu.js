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
const Nav = styled(_Nav)(props => ({
  display: "flex",
  flexWrap: "nowrap",
  alignItems: "center",

  "& .icon-toggle": {
    order: "2",
    marginLeft: "var(--lem)"
  }
}));

/**
 * Styles the list container
 */
const List = styled("ul")(props => ({}));

/**
 * Sets the status of a menu item
 */
const setMenuItemStatus = props => {
  const { menuItemId, activeMenuItem, menuType, newMenuType } = props;

  if (menuType === "list" || newMenuType === "list") {
    return menuItemId == activeMenuItem ? "active" : "inactive";
  } else {
    return menuItemId == activeMenuItem ? "inactive" : "hidden";
  }
};

/**
 * Renders the menu items
 */
const createMenuItems = props => {
  const {
    items,
    activeMenuItem,
    menuType,
    menuItemClickHandler,
    newMenuType
  } = props;

  return items.map((item, index) => {
    const { id } = item;

    const status = setMenuItemStatus({
      menuItemId: id,
      activeMenuItem: activeMenuItem,
      menuType: menuType,
      newMenuType: newMenuType
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
  const {
    dropdownIconState,
    dropdownIconClickHandler,
    menuType,
    theme
  } = props;

  if (menuType !== "dropdown") {
    return null;
  }

  const icon1 = theme.icons.chevronDown;
  const icon2 = theme.icons.chevronUp;

  return (
    <IconToggle
      icon1={icon1}
      icon2={icon2}
      toggled={dropdownIconState}
      toggleIconClickHandler={dropdownIconClickHandler}
    />
  );
};

/**
 * Displays the Menu
 */
const Menu = props => {
  const { menuType, renderedItems, dropdownIcons } = props;
  const { toggled } = dropdownIcons;
  const { theme } = useTheme();

  /**
   * Saves the state of the dropdown menu type
   */
  const [dropdownMenuType, setDropdownMenuType] = useState("dropdown");

  /**
   * Saves the state of the dropdown icon
   */
  const [dropdownIconState, setDropdownIconState] = useState(toggled);

  /**
   * Manages the click on the dropdown icon
   */
  const dropdownIconClickHandler = () => {
    setDropdownIconState(!dropdownIconState);

    dropdownIconState
      ? setDropdownMenuType("dropdown")
      : setDropdownMenuType("list");
  };

  /**
   * Sets up the dropdown icons
   */
  const iconToggle = setupDropdownIcons({
    theme,
    menuType,
    dropdownIconState,
    dropdownIconClickHandler
  });

  /**
   * Derives menu type from the dropdown icon state
   */
  const newMenuType = menuType === "dropdown" ? dropdownMenuType : menuType;

  /**
   * Renders the menu items
   */
  const menuItems = createMenuItems({ newMenuType, ...props });

  return (
    <Nav title="Menu" className="Menu">
      {iconToggle}
      <List menuType={newMenuType}>
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
