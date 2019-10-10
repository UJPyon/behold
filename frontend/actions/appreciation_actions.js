import * as AppreciationApiUtil from '../utils/appreciation_api_util';
import { receiveProject } from './project_actions';

export const REMOVE_APPRECIATION_FROM_USER = "REMOVE_APPRECIATION_FROM_USER";
export const ADD_APPRECIATION_TO_USER = "ADD_APPRECIATION_TO_USER";

export const createAppreciation = (projectId) => dispatch => {
  return AppreciationApiUtil.postAppreciation(projectId)
  .then(project => dispatch(receiveProject(project)));
};

export const removeAppreciation = (id) => dispatch => {
  return AppreciationApiUtil.deleteAppreciation(id)
  .then(project => dispatch(receiveProject(project)));
};

export const removeAppreciationFromUser = ({ projectId, userId }) => {
  return {
    type: REMOVE_APPRECIATION_FROM_USER,
    projectId,
    userId,
  };
};

export const addAppreciationToUser = ({ projectId, userId }) => {
  return {
    type: ADD_APPRECIATION_TO_USER,
    projectId,
    userId,
  };
};