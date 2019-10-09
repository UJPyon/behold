import { connect } from 'react-redux';
import Project from './project';
import { closeModal } from '../../actions/modal_actions';
import { fetchComments } from '../../actions/comment_actions';

const msp = (state, ownProps) => {
  const projectId = ownProps.projectId;
  const project = state.entities.projects[projectId];
  const imageUrls = project.imageUrls;
  const artistId = project.artistId;
  const artist = state.entities.users[artistId];
  debugger
  // const comments = state;
  return {
    artist,
    project,
    imageUrls,
    // comments,
  };
}

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    fetchComments: () => dispatch(fetchComments()),
  };
}

export default connect(msp, mdp)(Project);