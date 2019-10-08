import * as ProjectApiUtil from '../utils/project_api_util';

export const RECEIVE_ALL_PROJECTS = 'RECEIVE_PROJECTS';
// export const RECEIVE_USER_PROJECTS = 'RECEIVE_USER_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';

export const receiveAllProjects = (projects) => {
  return {
  type: RECEIVE_ALL_PROJECTS,
  projects,
}};

export const receiveProject = (project) => {
  return {
  type: RECEIVE_PROJECT,
  project,
}};

// export const receiveUserProjects = ({ projects, id }) => {
//   return {
//   type: RECEIVE_USER_PROJECTS,
//   projects,
//   id,
// }};

export const fetchProjects = () => dispatch => {
  ProjectApiUtil.getAllProjects()
  .then(projects => dispatch(receiveAllProjects(projects)));
};

export const fetchProject = (id) => dispatch => {
  ProjectApiUtil.getProject(id)
  .then(project => dispatch(receiveProject(project)));
};

// export const fetchUserProjects = (id) => dispatch => {
//   ProjectApiUtil.getAllProjects()
//   .then(projects => dispatch(receiveUserProjects({ projects, id })));
// };