import { connect } from "react-redux";
import { signup, login, clearErrors, receiveCurrentUser } from "../../actions/session_actions";
import SessionForm from "./session_form";

const msp = state => {
  return {
    errors: state.errors.session,
    formType: "Create an account",
  };
};

const mdp = dispatch => {
  return {
    processForm: userForm => dispatch(signup(userForm)),
    demoLogin: demoUser => dispatch(login(demoUser)),
    clearErrors: () => dispatch(clearErrors()),
    // receiveCurrentUser: () 
  };
};

export default connect(msp, mdp)(SessionForm);
