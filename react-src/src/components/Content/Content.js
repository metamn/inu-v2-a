import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { stringify } from "flatted";

import { useData } from "./../../hooks";

import Categories from "../Categories";
import Menu from "../Menu";
import { MenuItemPropTypes, MenuItemDefaultProps } from "../MenuItem";

/**
 * Defines the prop types
 */
const propTypes = {
  menuItemsFromCategories: PropTypes.array,
  menuItemsCustom: PropTypes.array
};

/**
 * Defines the default props
 */
const defaultProps = {
  menuItemsFromCategories: Array(5).fill(MenuItemDefaultProps),
  menuItemsCustom: [
    {
      id: "-1",
      name: "Random"
    },
    {
      id: "-2",
      name: "Contact"
    }
  ]
};

/**
 * Styles the component container
 */
const Container = styled("main")(props => ({}));

/**
 * Displays the component
 */
const Content = props => {
  const { menuItemsFromCategories, menuItemsCustom } = props;

  return (
    <Container className="Content">
      <Menu items={menuItemsCustom} renderedItems=<Categories /> />
    </Container>
  );
};

Content.propTypes = propTypes;
Content.defaultProps = defaultProps;

export default Content;
export { propTypes, defaultProps };
