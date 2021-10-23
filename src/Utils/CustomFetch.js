const customFetch = async (url, init) => {
  const response = await fetch(url, init);
  const data = await response.json();
  return data;
};

var Enums = {
  restVerbs: {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE",
  },
};

var restFetchs = {
  inits: {
    initGet: {
      method: Enums.restVerbs.GET,
    },
    initPost: {
      method: Enums.restVerbs.POST,
      headers: {
        "Content-Type": "application/json",
      },
      body: null,
    },
    putHeader: {
      method: Enums.restVerbs.PUT,
    },
    deleteHeader: {
      method: Enums.restVerbs.DELETE,
    },
  },
  fetchs: {
    getFetch(url) {
      return customFetch(url, restFetchs.inits.initGet);
    },
    postFetch(url, data) {
      let header = restFetchs.inits.initPost;
      header.body = JSON.stringify(data);
      return customFetch(url, header);
    },
    putFetch(url) {
      return customFetch(url, restFetchs.inits.putHeader);
    },
    deleteFetch(url) {
      return customFetch(url, restFetchs.inits.deleteHeader);
    },
    defaultFetch(url, header) {
      return customFetch(url, header);
    },
  },
};

export default restFetchs;
