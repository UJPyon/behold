export const postAppreciation = (id) => {
  return $.ajax({
    method: "POST",
    url: `api/projects/${id}/appreciations`,
    data: { project_id: id },
  });
};

export const deleteAppreciation = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `api/projects/appreciations/${id}`,
    data: { project_id: id },
  });
};
