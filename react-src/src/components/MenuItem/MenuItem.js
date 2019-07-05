import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Link from "../Link";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The id of the menu item.
   */
  id: PropTypes.any.isRequired,
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
  status: PropTypes.oneOf(["active", "inactive", "hidden"])
};

/**
 * Defines the default props
 */
const defaultProps = {
  id: 1,
  name: "Menu item",
  url: "",
  status: "active"
};

/**
 * Styles the component container
 */
const Container = styled("li")(props => ({}));

/**
 * Displays the component
 */
const MenuItem = props => {
  const { name, url, status } = props;

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
    <Container className="menu-item" status={status}>
      {item}
    </Container>
  );
};

MenuItem.propTypes = propTypes;
MenuItem.defaultProps = defaultProps;

export default MenuItem;
export { propTypes as MenuItemPropTypes, defaultProps as MenuItemDefaultProps };
