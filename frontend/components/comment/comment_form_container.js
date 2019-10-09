import { connect } from "react-redux";
import { createNewComment } from "../../actions/comment_actions";
import { clearErrors } from "../../actions/session_actions";
import CommentForm from "./comment_form";

const msp = state => {
  return {
    errors: state.errors.session,
  };
};

const mdp = dispatch => {
  return {
    processForm: (comment) => dispatch(createNewComment(comment)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(msp, mdp)(CommentForm);
