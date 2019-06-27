# Inu v2a

A photo portfolio site with React and WordPress: http://inu.ro

## Features

### Single Page App

### Many ways to add photos on the backend

- As featured image
- Inserted into the post
- As associated media to the post

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
