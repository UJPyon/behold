import { connect } from 'react-redux';
import Project from './project';

const msp = state => {
  return {
   state,
  };
}

const mdp = dispatch => {
  return {
    dispatch,
  };
}

export default connect(msp, mdp)(Project);