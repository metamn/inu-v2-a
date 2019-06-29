import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

/**
 * Defines prop types for SemanticHTMLElement
 * @type Object
 */
const propTypesForSemanticHTMLElement = {
  /**
   * The element name
   * Like 'section', 'article', 'aside', 'nav'
   */
  elementName: PropTypes.string.isRequired,
  /**
   * The element class name
   * Required to make it later styleable
   */
  className: PropTypes.string.isRequired,
  /**
   * The element title
   * Usually a string, but it can be a link too
   */
  title: PropTypes.any.isRequired,
  /**
   * The element children
   * Without children there is no use of an empty element
   */
  children: PropTypes.any.isRequired
};

/**
 * Defines prop types for individual elements
 * @type Object
 */
const propTypesForElement = {
  /**
   * The element name
   * It will be set automatically with the default props
   */
  elementName: PropTypes.string,
  /**
   * The element class name
   * Required to make it later styleable
   */
  className: PropTypes.string.isRequired,
  /**
   * The element title
   * Usually a string, but it can be a link too
   */
  title: PropTypes.any.isRequired,
  /**
   * The element children
   * Without children there is no use of an empty element
   */
  children: PropTypes.any.isRequired
};

/**
 * Defines prop types for Section
 * @type Object
 */
const defaultPropsForSection = {
  elementName: "section"
};

/**
 * Defines prop types for Article
 * @type Object
 */
const defaultPropsForArticle = {
  elementName: "article"
};

/**
 * Defines prop types for Aside
 * @type Object
 */
const defaultPropsForAside = {
  elementName: "aside"
};

/**
 * Defines prop types for Nav
 * @type Object
 */
const defaultPropsForNav = {
  elementName: "nav"
};

/**
 * Styles the semantic element title
 * - It is always hidden because it is needed only by the HTML outliner / validator
 * @type {[type]}
 */
const Title = styled("h3")([], {
  display: "none"
});

/**
 * Creates a semantic HTML element with title
 * - Semantic elements with title are properly outlined in https://validator.w3.org/
 * - When a HTML document outlines perfectly it means its component structure is flawless
 * - Many times an invalid outline structure points to errors in component design and helps fix it
 *
 * Returns something like: `<section><h3>section title</h3>...children</section>` where the title is hidden by default
 *
 * NOTE: since we have inside an element a title + content it will act as a list so we have to provide unique `key` props
 *
 * @param {[type]} props [description]
 */
const SemanticHTMLElement = props => {
  const { elementName, children, className, title } = props;

  const titleElement = React.createElement(
    Title,
    { className: "title", key: 1 },
    title
  );

  return React.createElement(elementName, { className: className, key: 2 }, [
    titleElement,
    children
  ]);
};

SemanticHTMLElement.propTypes = propTypesForSemanticHTMLElement;

/**
 * Creates a `<section>` element
 * @param {[type]} props [description]
 */
const Section = props => {
  return SemanticHTMLElement(props);
};

Section.propTypes = propTypesForElement;
Section.defaultProps = defaultPropsForSection;

/**
 * Creates an `<article>` element
 * @param {[type]} props [description]
 */
const Article = props => {
  return SemanticHTMLElement(props);
};

Article.propTypes = propTypesForElement;
Article.defaultProps = defaultPropsForArticle;

/**
 * Creates an `<aside>` element
 * @param {[type]} props [description]
 */
const Aside = props => {
  return SemanticHTMLElement(props);
};

Aside.propTypes = propTypesForElement;
Aside.defaultProps = defaultPropsForAside;

/**
 * Creates a `<nav>` element
 * @param {[type]} props [description]
 */
const Nav = props => {
  return SemanticHTMLElement(props);
};

Nav.propTypes = propTypesForElement;
Nav.defaultProps = defaultPropsForNav;

export { Section, Article, Aside, Nav };
