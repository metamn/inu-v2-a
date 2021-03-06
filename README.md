# Inu v2a

A photo portfolio site with React and WordPress: http://inu.ro

## Features

### Single Page App

### Many ways to add photos on the backend

- As featured image
- Inserted into the post
- As associated media to the post

### Dark and light themes

## Best practices

### Single responsibility principle

### Co-location

- GraphQL fragments

### Hooks

### Type checking

### Passing flat props

- This is also a good example for typechecking / props usage
- - Throughout the entire code we pass the same props structure:
- - `useState(props)`
- - `useQuery(query)`
- - `setSiteInfo(data.generalSettings)`
- - `<SiteInfo {...siteInfo} />`
- - And we decompose props only when they are finally displayed in the SiteInfo component:
- - `const { title, description, url } = props;`

Importing propTypes from other components: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md

### Naming conventions

### Style objects for better composition

### Function components

### Outlined semantic HTML elements

### Testing and documentation

- components: Storybook, jsdoc2md
- theme: Styleguide
- hooks: Jest (built in CRA) and `react-hooks-testing-library`

## Design

### CSS Reset

### Typographic grid

### Custom cursor

### Loading webfonts with `webfontloader`

### Modular scale

## Based on

### Modules (for React)

- [create-react-wptheme](https://github.com/devloco/create-react-wptheme) - based on `create-react-app` (CRA)
- [react-apollo-hooks](https://github.com/trojanowski/react-apollo-hooks) - to interact with `WP GraphQL` using the [Apollo GraphQL](https://github.com/apollographql/react-apollo) stack
- [styled-components](https://www.styled-components.com/) - for styling (preferably with [style objects syntax](https://github.com/metamn/styled-components))
- [polished](https://polished.js.org/) - styling helpers
- [prop-types](https://reactjs.org/docs/typechecking-with-proptypes.html) - for basic typechecking
- [react-axe](https://www.npmjs.com/package/react-axe) - for testing accessibility
- [react-helmet](https://github.com/nfl/react-helmet) - to manage the document head
- [react-icons](https://github.com/react-icons/react-icons) - for SVG icons
- [react-responsive](https://github.com/contra/react-responsive) - for media queries in components
- [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown) - to generate markdown from code documentation
- [storybook](https://storybook.js.org/) - to test components in isolation and display documentation
- [react-router-dom](https://www.npmjs.com/package/react-router) - for routing
- [react-hooks-testing-library](https://github.com/testing-library/react-hooks-testing-library) - for testing hooks

### Plugins (for WordPress)

- [WP GraphQL](https://www.wpgraphql.com/) to query data
- [Category Order and Taxonomy Terms Order](https://www.nsp-code.com/wordpress-plugins/category-order-and-taxonomy-terms-order/) to manage in which order categories are listed

## Difficulties

- Getting around the ecosystem / co-location. There are many opinions, contradictory opinions, inexperienced-but-loud opinions ... hard to find the right way. The same was true for rails/ruby. True sources / best practices: CRA, Dan Abramow, RWieruch

Ex.: https://dev.to/anssamghezala/you-don-t-have-to-use-redux-32a6 from the 'official' react newsletter #190 vs. https://www.robinwieruch.de/redux-vs-usereducer/

- Too much to learn / focus at once: hooks, styled components (vs ...), typechecking (vs ...), state (vs ...), graphql (vs...), docs/storybook (vs...)

## Gotchas

- Storybook is an enormous help to clean up code and design errors introduced when coding fast an idea. (Ie. in theme.js icons inside color declarations)
- Styleguide refactors components originally made for a single usage (Category) to a much broader usage (MenuItem)
- Writing the Styleguide was way easier than for Metamn. This means once the basic components are set up React can be very very productive.
- React is very expensive: lots of code to be written. For each part of its colocated parts.
