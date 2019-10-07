import { connect } from 'react-redux';
import { receiveAllUsers } from '../../actions/user_actions'
import { fetchProjects, fetchProject } from '../../actions/project_actions'
import Home from './home';

const msp = state => {
  const projects = state.projects;
  return {
    projects,
  };
}

const mdp = dispatch => {
  debugger
  return {
    fetchProjects: () => dispatch(fetchProjects()),
    receiveAllUsers: () => dispatch(receiveAllUsers()),
    fetchProject: (id) => dispatch(fetchProject(id)),
  };
}

export default connect(msp, mdp)(Home);