import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { useTheme } from "../../hooks";

import Link from "../Link";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The id of the menu item.
   */
  id: PropTypes.number.isRequired,
  /**
   * The name of the menu item.
   */
  name: PropTypes.string.isRequired,
  /**
   * An URL where the menu item links.
   */
  url: PropTypes.string,
  /**
   * The menu item status
   */
  status: PropTypes.oneOf(["active", "inactive", "hidden"]),
  /**
   * The click handler
   */
  menuItemClickHandler: PropTypes.func
};

/**
 * Defines the default props
 */
const defaultProps = {
  id: 1,
  name: "/ / / / / / / / / ",
  url: "",
  status: "inactive",
  menuItemClickHandler: () => {
    console.log("Menu item clicked");
  }
};

/**
 * Styles the component container
 */
const Container = styled("li")(props => ({
  ...props.theme.links.default,
  textDecoration: props.status === "active" ? "line-through" : "none",
  display: props.status === "hidden" ? "none" : "flex",
  cursor: "pointer"
}));

/**
 * Displays the component
 */
const MenuItem = props => {
  const { id, name, url, status, menuItemClickHandler } = props;
  const { theme } = useTheme();

  /**
   * Sets up a link if required
   */
  const item =
    url === "" ? (
      name
    ) : (
      <Link url={url} title={name}>
        {name}
      </Link>
    );

  return (
    <Container
      className="menu-item"
      status={status}
      theme={theme}
      onClick={() => menuItemClickHandler(id)}
    >
      {item}
    </Container>
  );
};

MenuItem.propTypes = propTypes;
MenuItem.defaultProps = defaultProps;

export default MenuItem;
export { propTypes as MenuItemPropTypes, defaultProps as MenuItemDefaultProps };
