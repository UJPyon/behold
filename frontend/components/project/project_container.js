import { connect } from 'react-redux';
import Project from './project';
import { closeModal } from '../../actions/modal_actions';
import { fetchProject } from '../../actions/project_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
  debugger
  const projectId = ownProps.location.pathname.split("/")[3];
  const project = state.entities.projects[projectId];
  const imageUrls = project.imageUrls;
  const artistId = project.artistId;
  const artist = state.entities.users[artistId];
  return {
    artist,
    project,
    imageUrls,
  };
}

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    fetchProject: (id) => dispatch(fetchProject(id)),
  };
}

export default withRouter(connect(msp, mdp)(Project));