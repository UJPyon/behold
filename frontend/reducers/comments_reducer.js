import { RECEIVE_ALL_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import { merge } from 'lodash';

const commentsReducer = (oldState = {}, action) => {
  debugger
  Object.freeze(oldState);
  let newState;

  switch(action.type) {
    case RECEIVE_ALL_COMMENTS:
      return merge({}, action.comments);
    case RECEIVE_COMMENT:
      return merge({}, oldState, {[action.comment.projectId]: action.comment});
    case REMOVE_COMMENT:
      newState = merge({}, oldState);
      delete newState[action.comment.commentId];
      return newState;
    default: 
      return oldState;
  }
}

export default commentsReducer;