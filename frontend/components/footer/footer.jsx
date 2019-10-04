import React from 'react';
import AdobeIcon from '../navbar/adobe_button_icon';

class Footer extends React.Component {
  render() {
    return (
    <footer className="main-footer">
      <div className="main-footer-icons">
        <a href="https://www.linkedin.com/in/unjae-pyon-9a833972?trk=people-guest_profile-result-card_result-card_full-click"><img className="main-footer-icon" src={window.linkedIn} /></a>
        <a href="https://github.com/UJPyon"><img className="main-footer-icon" src={window.gitHub}/></a>
      </div>
      <a href="https://www.adobe.com/creativecloud.html" className="footer-adobe-logo">
        <div><AdobeIcon /></div>
        <div className="footer-adobe-logo-text">Adobe</div>
      </a>      
    </footer>
    )
  }
}

export default Footer;