import React from "react";
import styled from "styled-components";

/**
 * Styles the semantic element title
 * - It is always hidden because it is needed only by the HTML outliner / validator
 * @type {[type]}
 */
const Title = styled("h3")([], {
  display: "none"
});

/**
 * Creates a semantic HTML element
 * - Semantic elements are properly outlined in https://validator.w3.org/
 * - When a HTML document outlines perfectly it means its component structure is flawless
 * - Many times and invalid outline points into errors in component design
 *
 * Returns something like: `<section><h3>section title</h3>...children</section>`
 * @param {[type]} props [description]
 */
const SemanticHTMLElement = props => {
  const { elementName, children, className, title } = props;

  const titleElement = React.createElement(
    Title,
    { className: "title" },
    title
  );

  return React.createElement(elementName, { className: className }, [
    titleElement,
    children
  ]);
};

/**
 * Create a `<section>` element
 * @param {[type]} props [description]
 */
const Section = props => {
  return SemanticHTMLElement({
    elementName: "section",
    ...props
  });
};

/**
 * Create an `<article>` element
 * @param {[type]} props [description]
 */
const Article = props => {
  return SemanticHTMLElement({
    elementName: "article",
    ...props
  });
};

/**
 * Create a `<aside>` element
 * @param {[type]} props [description]
 */
const Aside = props => {
  return SemanticHTMLElement({
    elementName: "aside",
    ...props
  });
};

/**
 * Create a `<nav>` element
 * @param {[type]} props [description]
 */
const Nav = props => {
  return SemanticHTMLElement({
    elementName: "nav",
    ...props
  });
};

export { Section, Article, Aside, Nav };
