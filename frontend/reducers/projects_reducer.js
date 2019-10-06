import { RECEIVE_ALL_PROJECTS, RECEIVE_PROJECT } from '../actions/project_actions';
import { merge } from 'lodash';

const projectsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_ALL_PROJECTS:
      return merge({}, action.projects);
    case RECEIVE_PROJECT:
      return merge({}, oldState, {[action.project.id]: action.project});
    default: 
      return oldState;
  }
};

export default projectsReducer;