import React from 'react';
import { Link } from 'react-router-dom';


class SplashPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.state;
    this.whichButton = this.whichButton.bind(this);
  }

  componentDidMount() {
    document.body.style.backgroundImage = "url('https://behold-aa.s3.us-east-2.amazonaws.com/signup_login_background.jpg')";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }

  whichButton() {
    let loggedIn = this.state.session.id;
    if (loggedIn) {
      return (
      <div className="splash-alt-link">
        <Link className="splash-active-alt-link-a" to="/home">Let's get back</Link>
      </div>
      )
    } else {
      return (
      <div className="splash-active-link">
        <Link className="splash-active-a" to="/login">Log in</Link>
        <Link className="splash-active-a" to="/signup">Get started</Link>
      </div>
      )
    }
  }

  render() {
    return (
    <div className="splash">
      <section className="splash-active">
        <div className="splash-active-text">
          <img className="splash-logo" src="https://behold-aa.s3.us-east-2.amazonaws.com/behold_logo_bold.png" />
          <p>Behold is a website where students can showcase their works</p>
          <p>of art! Share your awesome creations for everyone to behold!</p>
        </div>
        {this.whichButton()}

      </section>
    </div>
    )
  }
}

export default SplashPage;