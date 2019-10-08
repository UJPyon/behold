export const findUser = (id) => {
  return (
    $.ajax({
      method: "GET",
      url: `api/users/${id}`,
    })
  );
}

export const getAllUsers = () => {
  return (
    $.ajax({
      method: "GET",
      url: "api/users",
    })
  );
}