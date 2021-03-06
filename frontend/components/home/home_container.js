import { connect } from 'react-redux';
import { receiveAllUsers } from '../../actions/user_actions';
import { fetchComments } from '../../actions/comment_actions';
import { fetchProjects, fetchProject } from '../../actions/project_actions';
import { fetchCategories, fetchCategory } from '../../actions/category_actions';
import { openModal } from '../../actions/modal_actions';
import Home from './home';

const msp = state => {
  const projects = Object.values(state.entities.projects) || {};
  const users = state.entities.users;
  const categories = state.entities.categories;
  return {
    projects,
    users,
    categories,
  };
}

const mdp = dispatch => {
  return {
    fetchProjects: () => dispatch(fetchProjects()),
    receiveAllUsers: () => dispatch(receiveAllUsers()),
    fetchComments: () => dispatch(fetchComments()),
    fetchProject: (id) => dispatch(fetchProject(id)),
    fetchCategories: () => dispatch(fetchCategories()),
    fetchCategory: (id) => dispatch(fetchCategory(id)),
    openModal: (str) => dispatch(openModal(str)),
  };
}

export default connect(msp, mdp)(Home);