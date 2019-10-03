import { connect } from 'react-redux';
import { login, clearErrors, userExists } from '../../actions/session_actions';
import LoginPasswordForm from './login_password_form';

const msp = (state, ownProps) => {
  debugger
  const userId = ownProps.match.params.userId;
  return {
    errors: state.errors.session,
    user: state.entities.users[userId],
    formType: "Sign in",
  };
}

const mdp = dispatch => {
  return {
    processForm: userForm => dispatch(login(userForm)),
    clearErrors: () => dispatch(clearErrors()),
    userExists: user => dispatch(userExists(user)),
  };
}

export default connect(msp, mdp)(LoginPasswordForm);