import { connect } from "react-redux";
import { receiveAllUsers } from "../../actions/user_actions";
import { fetchComments } from "../../actions/comment_actions";
import { fetchProjects, fetchProject } from "../../actions/project_actions";
import { fetchCategories, fetchCategory } from "../../actions/category_actions";
import { openModal } from "../../actions/modal_actions";
import Category from './category';

const msp = (state, ownProps) => {
  const categoryId = ownProps.match.params.categoryId;
  let projects = Object.values(state.entities.projects);
  let users = state.entities.users;
  let categories = state.entities.categories;
  let categoryProjectIds = categories[categoryId].projectIds || [];
  let categoryProjects = [];
  if (categoryProjectIds.length) {
    categoryProjects = categoryProjectIds.map(id => state.entities.projects[id]);
  }
  debugger
  return {
    categoryProjects,
    projects,
    users,
    categories,
    categoryId,
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

export default connect(msp, mdp)(Category);