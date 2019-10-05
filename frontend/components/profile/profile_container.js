import { connect } from 'react-redux';
import Profile from './profile';
import { fetchProject, fetchProjects } from '../../actions/project_actions';
import { receiveUser } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  const userId = ownProps.match.params.userId;
  const projectIds = state.entities.users[userId].projectIds;
  const projects = projectIds.map(id => state.entities.projects[id]);
  const artist = state.entities.users[userId];
  debugger
  return {
    projects,
    artist,
  };
}

const mdp = dispatch => {
  return {
    fetchProject: (id) => dispatch(fetchProject(id)),
    fetchProjects: () => dispatch(fetchProjects()),
    receiveUser: (id) => dispatch(receiveUser(id)),
    openModal: (str) => dispatch(openModal(str)),
  };
}

export default connect(msp, mdp)(Profile);