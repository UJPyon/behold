import { connect } from 'react-redux';
import Profile from './profile';
import { fetchProject, fetchProjects } from '../../actions/project_actions';
import { receiveAllUsers } from '../../actions/user_actions';
import { fetchComments } from '../../actions/comment_actions';
import { fetchCategories } from '../../actions/category_actions';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  const userId = ownProps.match.params.userId;
  let projectIds = null;
  let projects = [];
  let appreciatedProjectIds = [];
  let appreciatedProjects = [];
  let users = null;
  if (Object.keys(state.entities.users).includes(userId)) {
    projectIds = state.entities.users[userId].projectIds;
    projects = projectIds.map(id => state.entities.projects[id]);
    appreciatedProjectIds = state.entities.users[userId].appreciatedProjectIds;
    appreciatedProjects = appreciatedProjectIds.map(id => state.entities.projects[id]);
    users = state.entities.users;
  } 
  const artist = state.entities.users[userId];
  return {
    projects,
    appreciatedProjects,
    artist,
    userId,
    users,
  };
}

const mdp = dispatch => {
  return {
    fetchProject: (id) => dispatch(fetchProject(id)),
    fetchProjects: () => dispatch(fetchProjects()),
    fetchComments: () => dispatch(fetchComments()),
    fetchCategories: () => dispatch(fetchCategories()),
    receiveAllUsers: () => dispatch(receiveAllUsers()),
    openModal: (object) => dispatch(openModal(object)),
  };
}

export default connect(msp, mdp)(Profile);