import * as CommentApiUtil from '../utils/comment_api_util';

export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const receiveAllComments = (comments) => {
  return {
    type: RECEIVE_ALL_COMMENTS,
    comments,
  };
};

export const removeComment = (commentId) => {
  return {
    type: REMOVE_COMMENT,
    commentId,
  };
};

export const receiveComment = (comment) => {
  return {
    type: RECEIVE_COMMENT,
    comment,
  };
};

export const fetchComments = () => dispatch => {
  CommentApiUtil.getAllComments()
  .then(comments => dispatch(receiveAllComments(comments)));
};

export const createNewComment = (comment) => dispatch => {
  CommentApiUtil.postComment(comment)
  .then(comment => dispatch(receiveComment(comment)));
};

export const deleteComment = (id) => dispatch => {
  CommentApiUtil.deleteComment(id)
  .then(comment => dispatch(removeComment(comment)));
};