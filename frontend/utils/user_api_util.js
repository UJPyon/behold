export const findUser = (id) => {
  return (
    $.ajax({
      method: "GET",
      url: `api/users/${id}`,
    })
  );
}