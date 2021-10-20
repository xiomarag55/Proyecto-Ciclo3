import restFetchs from "../../Utils/CustomFetch";

const validationLogin = async (login) => {
  const data = {
    googleId: login.it.sT,
    email: login.it.Tt,
  };
  return await restFetchs.fetchs.postFetch(
    "http://localhost:3002/api/users/login",
    data
  );
};

const saveUsuarioLogin = async (login) => {
  const data = {
    email: login.it.Tt,
    name: login.it.Se,
    role: "Vendedor",
    status: "Pendiente",
    googleId: login.it.sT,
  };
  return await restFetchs.fetchs.postFetch(
    "http://localhost:3002/api/users",
    data
  );
};

const ApiLogin = {
  async validarLogin(login) {
    const data = await validationLogin(login);
        return data.json;
  },
  saveLogin(login) {
    return saveUsuarioLogin(login);
  },
};

export default ApiLogin;
