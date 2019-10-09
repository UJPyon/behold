export const getAllComments = () => {
  debugger
  return (
    $.ajax({
      method: "GET",
      url: "/api/comments",
    })
  );
}

// --TEST CODE: RETRIEVE A SPECIFIC PROJECT'S COMMENTS--
// export const getProjectComments = (id) => {
//   return (
//     $.ajax({
//       method: "GET",
//       url: `/api/projects/${id}/comments`,
//     })
//   );
// }

export const postComment = (comment) => {
  return (
    $.ajax({
      method: "POST",
      url: "/api/comments",
      data: { comment },
    })
  );
}

export const deleteComment = (id) => {
  return (
    $.ajax({
      method: "DELETE",
      url: `/api/comments${id}`,
    })
  );
}