import { connect } from 'react-redux';
import Profile from './profile';
import { fetchProject, fetchProjects } from '../../actions/project_actions';
import { receiveAllUsers } from '../../actions/user_actions';
import { fetchComments } from '../../actions/comment_actions';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  const userId = ownProps.match.params.userId;
  let projectIds;
  let projects;
  if (Object.keys(state.entities.users).includes(userId)) {
    projectIds = state.entities.users[userId].projectIds;
    projects = projectIds.map(id => state.entities.projects[id]);
  } else {
    projectIds = null;
    projects = [];
  }
  const artist = state.entities.users[userId];
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
    fetchComments: () => dispatch(fetchComments()),
    receiveAllUsers: () => dispatch(receiveAllUsers()),
    openModal: (object) => dispatch(openModal(object)),
  };
}

export default connect(msp, mdp)(Profile);