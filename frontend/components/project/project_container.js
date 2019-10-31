import { connect } from 'react-redux';
import Project from './project';
import { closeModal } from '../../actions/modal_actions';
import { fetchComments, deleteComment } from '../../actions/comment_actions';
import { 
  createAppreciation, 
  removeAppreciation, 
  removeAppreciationFromUser,
  addAppreciationToUser,
} from "../../actions/appreciation_actions";


const msp = (state, ownProps) => {
  // --Grab project from state by project ID--
  const projectId = ownProps.projectId;
  const project = state.entities.projects[projectId];

  // -- Grab project category--
  const categoryId = project.categoryIds[0];
  const category = state.entities.categories[categoryId];

  // --Grab Image URL's for project--
  const imageUrls = project.imageUrls;

  // --Grab artist of project by artist ID--
  const artistId = project.artistId;
  const artist = state.entities.users[artistId];
  
  // --Grab comments of project by project's comment ID's--
  const commentIds = project.commentIds;
  const comments = commentIds.map(id => {
    if (state.entities.comments[id] === undefined) {
      let nothing;
    } else {
      return state.entities.comments[id];
    }
  });
  
  // --All users--
  const users = state.entities.users;

  // --Current user--
  const currentUser = users[state.session.id];
  return {
    artist,
    users,
    currentUser,
    project,
    imageUrls,
    comments,
    category,
    categoryId,
  };
}

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    fetchComments: () => dispatch(fetchComments()),
    deleteComment: object => dispatch(deleteComment(object)),
    createAppreciation: projectId => dispatch(createAppreciation(projectId)),
    removeAppreciation: id => dispatch(removeAppreciation(id)),
    removeAppreciationFromUser: (object) => dispatch(removeAppreciationFromUser(object)),
    addAppreciationToUser: (object) => dispatch(addAppreciationToUser(object)),
  };
}

export default connect(msp, mdp)(Project);