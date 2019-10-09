import { connect } from 'react-redux';
import Project from './project';
import { closeModal } from '../../actions/modal_actions';
import { fetchComments } from '../../actions/comment_actions';

const msp = (state, ownProps) => {
  // --Grab project from state by project ID--
  const projectId = ownProps.projectId;
  const project = state.entities.projects[projectId];

  // --Grab Image URL's for project--
  const imageUrls = project.imageUrls;

  // --Grab artist of project by artist ID--
  const artistId = project.artistId;
  const artist = state.entities.users[artistId];
  
  // --Grab comments of project by project's comment ID's--
  const commentIds = project.commentIds;
  const comments = commentIds.map(id => state.entities.comments[id]);
  debugger
  return {
    artist,
    project,
    imageUrls,
    comments,
  };
}

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    fetchComments: () => dispatch(fetchComments()),
  };
}

export default connect(msp, mdp)(Project);