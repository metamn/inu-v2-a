The component performs the following tasks:

<details>
	<summary>###Defines the prop types

</summary>
* A category node

* A list of category nodes

* The number of initial edges aka. how many loading indicators to display at the first load.

* The number of edges saved to local storage. After the data is loaded the real number of edges is saved to the local storage. At the next load the same amount of loading inidcators will be displayed as the real number of edges.

* The function which saves the number of edges to local storage

</details>

<details>
	<summary>###Defines the default props

</summary>
</details>

<details>
	<summary>###Defines the database query

</summary>
</details>

<details>
	<summary>###Converts Categories to a list of MenuItems

</summary>
</details>

<details>
	<summary>###Creates temporary data to be displayed while real data is loading

</summary>
* Defines the number of edges to be displayed either from default props or from the local storage

</details>

<details>
	<summary>###Returns the categories as a List of MenuItems

</summary>
* Loads temporary data

* Loads the real data

* Puts together the data

</details>

