const matchRoles = (list: string[], rol: string): boolean => {
  if (list.find((e) => e === rol)) {
    return true;
  } else {
    return false;
  }
};

export default matchRoles;
