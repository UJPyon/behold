import * as ProjectApiUtil from '../utils/project_api_util';

export const RECEIVE_ALL_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';

export const receiveAllProjects = (projects) => {
  return {
    type: RECEIVE_ALL_PROJECTS,
    projects,
  };
};

export const receiveProject = (project) => {
  return {
    type: RECEIVE_PROJECT,
    project,
  };
};

export const fetchProjects = () => dispatch => {
  return ProjectApiUtil.getAllProjects()
  .then(projects => dispatch(receiveAllProjects(projects)));
};

export const fetchProject = (id) => dispatch => {
  return ProjectApiUtil.getProject(id)
  .then(project => dispatch(receiveProject(project)));
};