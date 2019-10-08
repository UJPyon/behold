import { connect } from 'react-redux';
import Profile from './profile';
import { fetchProject, fetchProjects } from '../../actions/project_actions';
import { receiveAllUsers } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  debugger
  const userId = ownProps.match.params.userId;
  // TESTING CONDITIONALS BELOW::::
  let projectIds;
  let projects;
  if (Object.keys(state.entities.users).includes(userId)) {
    projectIds = state.entities.users[userId].projectIds;
    projects = projectIds.map(id => state.entities.projects[id]);
  } else {
    projectIds = null;
    projects = [];
  }
  // END TESTS
  const artist = state.entities.users[userId];
  debugger
  return {
    projects,
    artist,
    userId,
  };
}

const mdp = dispatch => {
  return {
    fetchProject: (id) => dispatch(fetchProject(id)),
    fetchProjects: () => dispatch(fetchProjects()),
    receiveAllUsers: () => dispatch(receiveAllUsers()),
    openModal: (str) => dispatch(openModal(str)),
  };
}

export default connect(msp, mdp)(Profile);