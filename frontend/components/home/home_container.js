import { connect } from 'react-redux';
import { fetchProjects, fetchProject } from '../../actions/project_actions'
import Home from './home';

const msp = state => {
  const projects = state.projects;
  return {
    projects,
  };
}

const mdp = dispatch => {
  return {
    fetchProjects: () => dispatch(fetchProjects()),
    fetchProject: (id) => dispatch(fetchProject(id)),
  };
}

export default connect(msp, mdp)(Home);