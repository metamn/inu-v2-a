import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { stringify } from "flatted";

import { useLocalStorage } from "./../../hooks";

import Categories, {
  categoriesToMenuItems,
  CategoryDefaultProps
} from "../Categories";
import Menu from "../Menu";
import { MenuItemPropTypes, MenuItemDefaultProps } from "../MenuItem";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * A list of Categories rendered as MenuItems
   */
  menuItemsFromCategories: PropTypes.arrayOf(PropTypes.node),
  /**
   * Custom menu items like Contact and Random
   */
  menuItemsCustom: PropTypes.arrayOf(PropTypes.shape({ ...MenuItemPropTypes }))
};

/**
 * Defines the default props
 */
const defaultProps = {
  menuItemsFromCategories: categoriesToMenuItems(
    Array(5).fill(CategoryDefaultProps)
  ),
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
  const { menuItemsCustom, menuItemsFromCategories } = props;

  /**
   * Saves the number of categories to local storage
   * At the next load exactly the same number of temporary categories will be displayed as the real number of categories
   */
  const [numberOfEdgesSaved, setNumberOfEdgesSaved] = useLocalStorage(
    "number-of-edges"
  );

  /**
   * Loads Categories as a list of MenuItems
   */
  const categories = (
    <Categories
      numberOfEdgesSaved={numberOfEdgesSaved}
      setNumberOfEdgesSaved={setNumberOfEdgesSaved}
    />
  );

  return (
    <Container className="Content">
      <Menu items={menuItemsCustom} renderedItems={categories} />
    </Container>
  );
};

Content.propTypes = propTypes;
Content.defaultProps = defaultProps;

export default Content;
export { propTypes, defaultProps };
