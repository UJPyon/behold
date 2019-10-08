export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = ({modal, projectId}) => {
  debugger
  return {
    type: OPEN_MODAL,
    modal,
    projectId,
  };
};

export const closeModal = () => {
  debugger
  return {
    type: CLOSE_MODAL,
  };
};
