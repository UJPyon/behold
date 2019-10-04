export const getAllProjects = () => {
  return (
    $.ajax({
      method: "GET",
      url: "api/projects",
    })
  );
}

export const getProject = (id) => {
  return (
    $.ajax({
      method: "GET",
      url: `api/projects/${id}`,
    })
  );
}