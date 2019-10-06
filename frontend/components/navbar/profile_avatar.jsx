import React from 'react';
import { connect } from 'react-redux';


const msp = (state, ownProps) => {
  const className = ownProps.class;
  return {className};
};

class ProfileAvatar extends React.Component {
  render() {
    let className;
    let iconStyle;
    if (this.props.className === "home-navbar-avatar") {
      className = "";
      iconStyle = {
        height: "30px",
        width: "30px",
        marginTop: "15px"
      };
    }

    return (
      <img style={iconStyle || {}} className={className || ""} src={window.profileAvatar} />
    )
  }
}

export default connect(msp)(ProfileAvatar);