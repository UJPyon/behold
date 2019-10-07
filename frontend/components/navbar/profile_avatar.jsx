import React from 'react';
import { connect } from 'react-redux';


const msp = (state, ownProps) => {
  const className = ownProps.class;
  const size = ownProps.size;
  return {className, size};
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
      };
    } else if (this.props.size) {
      iconStyle = this.props.size;
    }

    return (
      <img style={iconStyle || {}} className={className || ""} src={window.profileAvatar} />
    )
  }
}

export default connect(msp)(ProfileAvatar);