const BooleanUtility = {
  isBoolean(variable) {
    if (
      typeof variable === "boolean" ||
      variable === "true" ||
      variable === "false"
    ) {
      return true;
    } else {
      return false;
    }
  },
  parseBoolean(variable) {
    let valor = false;
    if (this.isBoolean(variable)) {
      if (typeof variable === "boolean") {
        valor = variable;
      } else if (variable === "true") {
        valor = true;
      } else if (variable === "false") {
        valor = false;
      }
    }
    return valor;
  },
};

export default BooleanUtility;
