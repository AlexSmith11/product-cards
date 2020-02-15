/**
 * test axios api call - ignore
 */
export const getEvents = async () => {
      return Axios.get(
        "https:www.get",
        { headers: { Authorization: "gredfsfbghdstyh" } }
      ).then(response => {
        return response;
      });
    };