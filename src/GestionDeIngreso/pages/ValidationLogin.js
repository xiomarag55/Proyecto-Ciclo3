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
    redirect(response.response[0].role);
  } else if (response.status === 1) {
    const data = {
      email: login.it.Tt,
      name: login.it.Se,
      role: "Vendedor",
      status: "Pendiente",
      googleId: login.it.sT,
    };
    const response = await restFetchs.fetchs.postFetch(
      "http://localhost:3002/api/users",
      data
    );

    redirect(response.response[0].role);
  }
};

const redirect = (role) => {
  if (role === "Administrador") {
    window.location.href = "/GestionDeUsuarios";
  } else if (role === "Vendedor") {
    window.location.href = "/administradordeventas";
  } else {
    window.location.href = "/";
  }
};
export default validationLogin;
