import jwtDecode from "jwt-decode";
import restFetchs from "../../Utils/CustomFetch";

const validationLogin = async (login) => {
  const token = jwtDecode(login.tokenId);

  const response = await restFetchs.fetchs.postFetch(
    process.env.REACT_APP_BACKEND_URL + "users/login",
    { email: token.email }
  );

  if (response.status === 0) {
    return [true, response.response[0].role];
  } else if (response.status === 1) {
    const data = {
      email: token.email,
      name: token.name,
      role: "vendedor",
      status: "Pendiente",
    };

    const response = await restFetchs.fetchs.postFetch(
      process.env.REACT_APP_BACKEND_URL + "users",
      data
    );

    return [true, response.response.role];
  } else {
    return [false, null];
  }
};

export default validationLogin;
