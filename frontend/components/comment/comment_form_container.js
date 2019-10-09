import { connect } from "react-redux";
import { createNewComment, fetchComments } from "../../actions/comment_actions";
import { closeModal } from "../../actions/modal_actions";
import { fetchProject } from "../../actions/project_actions";
import { clearErrors } from "../../actions/session_actions";
import CommentForm from "./comment_form";

const msp = (state, ownProps) => {
  const projectId = ownProps.projectId;
  const currentUserId = state.session.id;
  const currentUser = state.entities.users[currentUserId];
  return {
    errors: state.errors.session,
    projectId,
    currentUserId,
    currentUser,
  };
};

const mdp = dispatch => {
  return {
    createNewComment: (comment) => dispatch(createNewComment(comment)),
    fetchProject: (id) => dispatch(fetchProject(id)),
    fetchComments: () => dispatch(fetchComments()),
    clearErrors: () => dispatch(clearErrors()),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(msp, mdp)(CommentForm);
