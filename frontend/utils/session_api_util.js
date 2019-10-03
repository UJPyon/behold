export const postUser = function(user) {
  return (
    $.ajax({
      method: "POST",
      url: "api/users",
      data: { user },
    }));
};

export const getUser = function(user) {
  return (
    $.ajax({
      method: "GET",
      url: "api/users/search",
      data: { user },
    }));
};

export const postSession = function(user) {
  return (
    $.ajax({
      method: "POST",
      url: "api/session",
      data: { user },
    })
  );
};

export const deleteSession = function() {
  return (
    $.ajax({
      method: "DELETE",
      url: "api/session",
    })
  );
};