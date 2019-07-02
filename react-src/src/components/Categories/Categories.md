## Constants

<dl>
<dt><a href="#propTypes">propTypes</a></dt>
<dd><p>Defines the prop types</p>
</dd>
<dt><a href="#defaultProps">defaultProps</a></dt>
<dd><p>Defines the default props</p>
</dd>
<dt><a href="#query">query</a></dt>
<dd><p>Defines the query</p>
</dd>
<dt><a href="#Container">Container</a></dt>
<dd><p>Displays the Categories container</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#createTemporaryData">createTemporaryData(props)</a> ⇒ <code>Object</code></dt>
<dd><p>Creates temporary data to be displayed while real data is loading</p>
</dd>
<dt><a href="#Categories">Categories(Object)</a></dt>
<dd><p>Displays the Categories</p>
</dd>
</dl>

<a name="propTypes"></a>

## propTypes

Defines the prop types

**Kind**: global constant

- [propTypes](#propTypes)
  - [.node](#propTypes.node)
  - [.edges](#propTypes.edges)
  - [.numberOfEdges](#propTypes.numberOfEdges)
  - [.numberOfEdgesSaved](#propTypes.numberOfEdgesSaved)
  - [.setNumberOfEdgesSaved](#propTypes.setNumberOfEdgesSaved)
  - [.activeCategory](#propTypes.activeCategory)
  - [.setActiveCategory](#propTypes.setActiveCategory)

<a name="propTypes.node"></a>

### propTypes.node

Defines a category node

**Kind**: static property of [<code>propTypes</code>](#propTypes)  
<a name="propTypes.edges"></a>

### propTypes.edges

Defines a list of category nodes

**Kind**: static property of [<code>propTypes</code>](#propTypes)  
<a name="propTypes.numberOfEdges"></a>

### propTypes.numberOfEdges

Defines the number of edges

**Kind**: static property of [<code>propTypes</code>](#propTypes)  
<a name="propTypes.numberOfEdgesSaved"></a>

### propTypes.numberOfEdgesSaved

Defines the number of edges saved to local storage

**Kind**: static property of [<code>propTypes</code>](#propTypes)  
<a name="propTypes.setNumberOfEdgesSaved"></a>

### propTypes.setNumberOfEdgesSaved

Defines the function which sets the number of edges saved to local storage

**Kind**: static property of [<code>propTypes</code>](#propTypes)  
<a name="propTypes.activeCategory"></a>

### propTypes.activeCategory

Defines the active category

**Kind**: static property of [<code>propTypes</code>](#propTypes)  
<a name="propTypes.setActiveCategory"></a>

### propTypes.setActiveCategory

Defines the function which sets the active category

**Kind**: static property of [<code>propTypes</code>](#propTypes)  
<a name="defaultProps"></a>

## defaultProps

Defines the default props

**Kind**: global constant  
<a name="query"></a>

## query

Defines the query

**Kind**: global constant  
<a name="Container"></a>

## Container

Displays the Categories container

**Kind**: global constant  
<a name="createTemporaryData"></a>

## createTemporaryData(props) ⇒ <code>Object</code>

Creates temporary data to be displayed while real data is loading

**Kind**: global function  
**Returns**: <code>Object</code> - An array of data

| Param | Type                | Description                                        |
| ----- | ------------------- | -------------------------------------------------- |
| props | <code>Object</code> | The Object from the temporary data will be created |

<a name="createTemporaryData..newNumberOfEdges"></a>

### createTemporaryData~newNumberOfEdges

Defines the number of edges to be displayed either from default props or from the local storage

**Kind**: inner constant of [<code>createTemporaryData</code>](#createTemporaryData)  
<a name="Categories"></a>

## Categories(Object)

Displays the Categories

**Kind**: global function

| Param  | Description                    |
| ------ | ------------------------------ |
| Object | props The component properties |

- [Categories(Object)](#Categories)
  - [~tempData](#Categories..tempData)
  - [~data](#Categories..data)
  - [~items](#Categories..items)

<a name="Categories..tempData"></a>

### Categories~tempData

Loads temporary data

**Kind**: inner constant of [<code>Categories</code>](#Categories)  
<a name="Categories..data"></a>

### Categories~data

Loads the real data

**Kind**: inner constant of [<code>Categories</code>](#Categories)  
<a name="Categories..items"></a>

### Categories~items

Displays the data

**Kind**: inner constant of [<code>Categories</code>](#Categories)  
Done in 0.48s.
