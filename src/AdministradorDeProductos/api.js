const callApi = async () => {
  const response = await fetch(process.env.REACT_APP_BACKEND_URL + "products");
  const data = await response.json();
  return data;
};

export default callApi;
