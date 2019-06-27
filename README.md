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

### Naming conventions

## Design

### CSS Reset

### Typographic grid

### Custom cursor

### Loading webfonts with `webfontloader`

### Modular scale

## Based on

### Modules (for React)

- [create-react-wptheme](https://github.com/devloco/create-react-wptheme) based on `create-react-app` (CRA)
- [react-apollo-hooks](https://github.com/trojanowski/react-apollo-hooks) - to interact with `WP GraphQL` using the [Apollo GraphQL](https://github.com/apollographql/react-apollo) stack
- [styled-components](https://www.styled-components.com/) - for styling
- [polished](https://polished.js.org/) - styling helpers
- [prop-types](https://reactjs.org/docs/typechecking-with-proptypes.html) - for basic typechecking
- [react-axe](https://www.npmjs.com/package/react-axe) - for testing accessibility
- [react-helmet](https://github.com/nfl/react-helmet) - to manage the document head

### Plugins (for WordPress)

- [WP GraphQL](https://www.wpgraphql.com/) to query data
- [Category Order and Taxonomy Terms Order](https://www.nsp-code.com/wordpress-plugins/category-order-and-taxonomy-terms-order/) to manage in which order categories are listed

## Difficulties

### Styled components

Styled components are the weakest part of the stack but [there is no better yet ...](https://2019.stateofcss.com/technologies/)

Probably using style objects vs tagged template literals is better: https://www.jakewiesler.com/blog/using-styled-components-without-template-literals/

We can have ... style spreads !!!:

```
// Defines text styles
const textStyles = {
  default: {
    fontSize: "100%",
    lineHeight: "1.25",
    --lem: "1.25em"
  },
  large: {
    fontSize: modularScale(1)
  }
};

const TypographicGridFromTheme2 = css(props => ({
  ...props.theme.textStyles.default
}));
```

instead of

```
// Sets up the typographic grid from theme
const TypographicGridFromTheme = css`
${props =>
  props.theme.textStyles.default.fontSize &&
  css`
    font-size: ${props.theme.textStyles.default.fontSize};
  `}

${props =>
  props.theme.textStyles.default.lineHeight &&
  css`
    line-height: ${props.theme.textStyles.default.lineHeight};
  `}

  ${props =>
    props.theme.textStyles.default.lem &&
    css`
      --lem: ${props.theme.textStyles.default.lem};
    `}
`;
```

It can't do things like:

```
import { Link as _Link } from "../Link";
...
const Link = styled(_Link)` // Gives https://github.com/styled-components/styled-components/issues/1449
```
