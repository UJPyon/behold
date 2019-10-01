import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Navbar from './navbar';

const msp = state => {
  const currentUserId = state.session.id;
  return ({
    currentUser: state.entities.users[currentUserId],
  });
}

const mdp = dispatch => {
  return ({
    logout: () => dispatch(logout()),
  });
}

export default connect(msp, mdp)(Navbar);