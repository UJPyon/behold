import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import ProjectContainer from '../project/project_container';

function Modal({ modal, closeModal }) {
  debugger
  if (!modal) {
    return null;
  }
  let component;
  switch (modal.modal) {
    case 'open project':
      component = <ProjectContainer projectId={modal.projectId}/>;
      break;
    default:
      return null;
  }
  debugger
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  debugger
  return {
    modal: state.ui.modal,
    projectId: state.ui.projectId,
  };
};

const mapDispatchToProps = dispatch => {
  debugger
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);