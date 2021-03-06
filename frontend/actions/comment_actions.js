import * as CommentApiUtil from '../utils/comment_api_util';
import { receiveErrors } from '../actions/session_actions';

export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const receiveAllComments = (comments) => {
  return {
    type: RECEIVE_ALL_COMMENTS,
    comments,
  };
};

export const removeComment = ({commentId, projectId}) => {
  return {
    type: REMOVE_COMMENT,
    commentId,
    projectId,
  };
};

export const receiveComment = (comment) => {
  return {
    type: RECEIVE_COMMENT,
    comment,
  };
};

export const fetchComments = () => dispatch => {
  return CommentApiUtil.getAllComments()
  .then(comments => dispatch(receiveAllComments(comments)));
};

export const createNewComment = (comment) => dispatch => {
  return CommentApiUtil.postComment(comment)
  .then(comment => dispatch(receiveComment(comment)))
  .fail(error => dispatch(receiveErrors(error.responseJSON)));
};

export const deleteComment = ({commentId, projectId}) => dispatch => {
  return CommentApiUtil.deleteComment(commentId)
  .then(comment => dispatch(removeComment({commentId: commentId, projectId: projectId})));
};