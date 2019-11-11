import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Navbar from './navbar';

const msp = state => {
  const currentUserId = state.session.id;
  let categories = {};
  if (Object.keys(state.entities.categories).length > 0) {
    categories = state.entities.categories;
  }
  return ({
    currentUser: state.entities.users[currentUserId],
    categories,
  });
}

const mdp = dispatch => {
  return ({
    logout: () => dispatch(logout()),
  });
}

export default connect(msp, mdp)(Navbar);