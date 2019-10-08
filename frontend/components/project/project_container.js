import { connect } from 'react-redux';
import Project from './project';
import { closeModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  debugger
  const projectId = ownProps.projectId;
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
  return {closeModal: () => dispatch(closeModal())};
}

export default connect(msp, mdp)(Project);