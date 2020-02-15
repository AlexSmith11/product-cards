import Axios from "axios";
/**
 * axios API call that is not used in this test, but would
 * be implemented when using an actual API to get info.
 * 
 * Replace filepath with link and add any params such as
 * a token if needed.
 */
export const getData = async () => {
      return Axios.get(
        "../json_array.json",
      ).then(response => {
        return response;
      });
    };