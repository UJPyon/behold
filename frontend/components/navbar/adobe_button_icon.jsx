import React from 'react';

const iconStyle = {
  height: "16px",
  width: "16px",
  marginRight: "5px"
}

class AdobeIcon extends React.Component {
  render() {
    return (
      <img style={iconStyle} src={window.adobeLogo}/>
    )
  }
}

export default AdobeIcon;