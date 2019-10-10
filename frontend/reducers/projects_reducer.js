import { RECEIVE_ALL_PROJECTS, RECEIVE_PROJECT } from '../actions/project_actions';
import { REMOVE_COMMENT } from '../actions/comment_actions';
import { merge } from 'lodash';

const projectsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;
  let commentIdArray;

  switch(action.type) {
    case RECEIVE_ALL_PROJECTS:
      return merge({}, action.projects);
    case RECEIVE_PROJECT:
      return merge({}, oldState, {[action.project.id]: action.project});
    case REMOVE_COMMENT:
      newState = merge({}, oldState);
      commentIdArray = newState[action.projectId].commentIds;
      commentIdArray.splice(commentIdArray.indexOf(action.commentId), 1);
      return newState;
    default: 
      return oldState;
  }
};

export default projectsReducer;