import { connect } from 'react-redux';
import Profile from './profile';
import { fetchProjects, fetchProject } from '../../actions/project_actions';

const msp = (state, ownProps) => {
  debugger
  const userId = ownProps.match.params.userId;
  return {
    projects: state.projects[userId],
  };
}

const mdp = dispatch => {
  return {
    fetchProjects: () => dispatch(fetchProjects),
    fetchProject: () => dispatch(fetchProject),
  };
}

export default connect(msp, mdp)(Profile);