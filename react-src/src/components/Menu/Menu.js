import React, { useState } from "react";
import styled from "styled-components";

import { useLocalStorage } from "./../../hooks";

import Categories from "../Categories";
import Category, {
  setCategoryStatus,
  propTypes as CategoryPropTypes
} from "../Category";
import { Nav as _Nav } from "../SemanticHTML";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The Random extra menu item
   */
  random: CategoryPropTypes,
  /**
   * The Contact extra menu item
   */
  contact: CategoryPropTypes
};

/**
 * Defines the default props
 */
const defaultProps = {
  /**
   * The default props for the Random extra menu item
   */
  random: {
    id: "random",
    categoryId: "-1",
    name: "Random"
  },
  /**
   * The default props for the Contact extra menu item
   */
  contact: {
    id: "contact",
    categoryId: "-2",
    name: "Contact"
  }
};

/**
 * Displays the Menu container
 */
const Nav = styled(_Nav)(props => ({}));

/**
 * Displays the the extra menu items container
 */
const ExtraMenuItems = styled("ul")(props => ({
  marginTop: "var(--lem)"
}));

/**
 * Displays the Menu
 */
const Menu = props => {
  /**
   * Saves the active category into a state
   */
  const [activeCategory, setActiveCategory] = useState(1);

  /**
   * Saves the number of categories to local storage
   * At the next load exactly the same number of temporary categories will be displayed as the real number of categories
   */
  const [numberOfEdgesSaved, setNumberOfEdgesSaved] = useLocalStorage(
    "number-of-edges"
  );

  return (
    <Nav title="Menu" className="menu">
      <Categories
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        numberOfEdgesSaved={numberOfEdgesSaved}
        setNumberOfEdgesSaved={setNumberOfEdgesSaved}
      />

      <ExtraMenuItems className="extra-menu-items">
        <Category
          {...defaultProps.random}
          status={setCategoryStatus({
            categoryId: defaultProps.random.categoryId,
            activeCategory: activeCategory
          })}
          setActiveCategory={setActiveCategory}
        />
        <Category
          {...defaultProps.contact}
          status={setCategoryStatus({
            categoryId: defaultProps.contact.categoryId,
            activeCategory: activeCategory
          })}
          setActiveCategory={setActiveCategory}
        />
      </ExtraMenuItems>
    </Nav>
  );
};

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;

export default Menu;
