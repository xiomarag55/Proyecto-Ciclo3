import restFetchs from "../../Utils/CustomFetch";

const validationLogin = async (login) => {
  const data = {
    googleId: login.it.sT,
    email: login.it.Tt,
  };
  const response = await restFetchs.fetchs.postFetch(
    "http://localhost:3002/api/users/login",
    data
  );

  if (response.status === 0) {
    return [true, response.response[0].role];
  } else if (response.status === 1) {
    const data = {
      email: login.it.Tt,
      name: login.it.Se,
      role: "vendedor",
      status: "Pendiente",
      googleId: login.it.sT,
    };
    const response = await restFetchs.fetchs.postFetch(
      "http://localhost:3002/api/users",
      data
    );

    return [true, response.response[0].role];
  } else {
    return [false, null];
  }
};

export default validationLogin;
