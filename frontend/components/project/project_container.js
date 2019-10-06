import { connect } from 'react-redux';
import Project from './project';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
  debugger
  const projectId = ownProps.location.pathname.split("/")[3];
  const images = state.entities.projects[projectId].imageUrls;
  return {
   images,
  };
}

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
}

export default withRouter(connect(msp, mdp)(Project));