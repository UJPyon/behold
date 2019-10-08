import { connect } from 'react-redux';
import { receiveAllUsers } from '../../actions/user_actions'
import { fetchProjects, fetchProject } from '../../actions/project_actions'
import { openModal } from '../../actions/modal_actions';
import Home from './home';

const msp = state => {
  debugger
  const projects = Object.values(state.entities.projects);
  const users = state.entities.users;
  return {
    projects,
    users,
  };
}

const mdp = dispatch => {
  debugger
  return {
    fetchProjects: () => dispatch(fetchProjects()),
    receiveAllUsers: () => dispatch(receiveAllUsers()),
    fetchProject: (id) => dispatch(fetchProject(id)),
    openModal: (str) => dispatch(openModal(str)),
  };
}

export default connect(msp, mdp)(Home);