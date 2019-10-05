import { connect } from 'react-redux';
import Project from './project';
import { closeModal } from '../../actions/modal_actions';

const msp = state => {

  // state.entities.projects[projectId];
  return {
   state,
  };
}

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
}

export default connect(msp, mdp)(Project);  