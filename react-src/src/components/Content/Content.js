import React, { useState } from "react";
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
  menuItemsCustom: PropTypes.arrayOf(PropTypes.shape({ ...MenuItemPropTypes })),
  /**
   * The active menu item id
   */
  menuItemActiveId: PropTypes.number
};

/**
 * Defines the default props
 */
const defaultProps = {
  menuItemsFromCategories: categoriesToMenuItems({
    data: Array(5).fill(CategoryDefaultProps),
    activeCategoryId: 1
  }),
  menuItemsCustom: [
    {
      id: "-1",
      name: "Random"
    },
    {
      id: "-2",
      name: "Contact"
    }
  ],
  menuItemActiveId: 1
};

/**
 * Styles the component container
 */
const Container = styled("main")(props => ({}));

/**
 * Displays the component
 */
const Content = props => {
  const { menuItemsCustom, menuItemActiveId } = props;

  /**
   * Saves the number of categories to local storage.
   *
   * At the next load exactly the same number of temporary categories will be displayed as the real number of categories
   */
  const [numberOfEdgesSaved, setNumberOfEdgesSaved] = useLocalStorage(
    "number-of-edges"
  );

  /**
   * Saves the active menu item into a state
   */
  const [activeMenuItem, setActiveMenuItem] = useState(menuItemActiveId);

  /**
   * Handles the click on a menu item
   */
  const menuItemClickHandler = id => {
    /**
     * Sets the active menu item
     */
    console.log("id:" + id);
    setActiveMenuItem(id);
  };

  /**
   * Loads Categories as a list of MenuItems.
   */
  const categories = (
    <Categories
      numberOfEdgesSaved={numberOfEdgesSaved}
      setNumberOfEdgesSaved={setNumberOfEdgesSaved}
      activeMenuItem={activeMenuItem}
      categoryClickHandler={menuItemClickHandler}
    />
  );

  return (
    <Container className="Content">
      <Menu
        items={menuItemsCustom}
        renderedItems={categories}
        menuItemClickHandler={menuItemClickHandler}
      />
    </Container>
  );
};

Content.propTypes = propTypes;
Content.defaultProps = defaultProps;

export default Content;
export { propTypes, defaultProps };
