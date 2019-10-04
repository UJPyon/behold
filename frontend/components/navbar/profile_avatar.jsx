import React from 'react';

const iconStyle = {
  height: "30px",
  width: "30px",
  marginTop: "15px"
}

class ProfileAvatar extends React.Component {
  render() {
    return (
      <img style={iconStyle} src={window.profileAvatar} />
    )
  }
}

export default ProfileAvatar;