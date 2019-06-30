import { useState, useEffect } from "react";
import { useQuery } from "./index";

/**
 * Loads data from database
 *
 * Example:
 * - defaultValues: {title: "Ioan Chivu", url: "http://inu.ro"}
 * - query:
 * ```
 * query siteInfo {
 * 	generalSettings {
 * 		title
 * 		url
 *  }
 * }
 * ```
 * - filter: 'generalSettings'
 *
 * @param  Object defaultValues The default values to return while loading data from the DB
 * @param  Object query         The GraphQL query to execute
 * @param  String filter        The part of the data to return
 * @return Object               The data returned
 */
const useData = (defaultValues, query, filter) => {
  /**
   * Sets up a state variable with default values
   * The db query is async which means we'll have to wait for the real data
   * During that the default values will be returned
   */
  const [newData, setNewData] = useState(defaultValues);

  /** Queries the database */
  const { data } = useQuery(query);

  /** Checks the results from database and updates the state variable */
  useEffect(
    () => {
      if (data && data[filter]) {
        setNewData(data[filter]);
      }
    },
    [data, filter]
  );

  /** Returns the data */
  return newData;
};

export default useData;
