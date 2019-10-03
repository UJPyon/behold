import { connect } from 'react-redux';
import { login, clearErrors, userExists } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = state => {
  return {
    errors: state.errors.session,
    email: state.entities.users.email,
    formType: "Sign in",
  };
}

const mdp = dispatch => {
  return {
    processForm: userForm => dispatch(login(userForm)),
    demoLogin: demoUser => dispatch(login(demoUser)),
    clearErrors: () => dispatch(clearErrors()),
    userExists: user => dispatch(userExists(user)),
  };
}

export default connect(msp, mdp)(SessionForm);