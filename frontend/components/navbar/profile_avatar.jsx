import React from 'react';
import { connect } from 'react-redux';


const msp = (state, ownProps) => {
  const className = ownProps.class;
  const size = ownProps.size;
  const avatarUrl = ownProps.avatarUrl;
  return { className, size, avatarUrl };
};

class ProfileAvatar extends React.Component {

  render() {
    // let className;
    // let iconStyle;
    // if (this.props.className === "home-navbar-avatar") {
    //   className = "";
    //   iconStyle = {
    //     height: "30px",
    //     width: "30px",
    //   };
    // } else if (this.props.size) {
    //   iconStyle = this.props.size;
    // }
    const iconStyle = this.props.size


    let avatarUrl;
    debugger
    if (this.props.avatarUrl) {
      avatarUrl = this.props.avatarUrl;
    } else {
      avatarUrl = window.defaultAvatar;
    }

    return (
      // <img style={iconStyle || {}} className={className || ""} src={window.profileAvatar} />
      <img style={iconStyle} src={avatarUrl} />
    );
  }
}

export default connect(msp)(ProfileAvatar);