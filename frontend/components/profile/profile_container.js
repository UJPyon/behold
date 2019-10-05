import { connect } from 'react-redux';
import Profile from './profile';
import { fetchProject } from '../../actions/project_actions';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  const userId = ownProps.match.params.userId;
  const projectIds = state.entities.users[userId].projectIds;
  const projects = projectIds.map(id => state.entities.projects[id]);
  const artist = state.entities.users[userId];
  return {
    projects,
    artist,
  };
}

const mdp = dispatch => {
  return {
    fetchProject: () => dispatch(fetchProject()),
    openModal: (str) => dispatch(openModal(str)),
  };
}

export default connect(msp, mdp)(Profile);