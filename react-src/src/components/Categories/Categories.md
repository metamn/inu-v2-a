yarn run v1.9.4
$ jsdoc2md --template .jsdoc2md/template.hbs src/components/Categories/Categories.js
The component performs the following tasks:

###Defines the prop types

* ### A category node

* ### A list of category nodes

* ### The number of initial edges aka. how many loading indicators to display at the first load.

* ### The number of edges saved to local storage. After the data is loaded the real number of edges is saved to the local storage. At the next load the same amount of loading inidcators will be displayed as the real number of edges.

* ### The function which saves the number of edges to local storage

* ### The active category

* ### The function which sets the active category

###Defines the default props

###Defines the database query

###Displays the Categories container

###Creates temporary data to be displayed while real data is loading

* ### Defines the number of edges to be displayed either from default props or from the local storage

###Displays the categories

* ### Loads temporary data

* ### Loads the real data

* ### Puts together the data

Done in 0.57s.
