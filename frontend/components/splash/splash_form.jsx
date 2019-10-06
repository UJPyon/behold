import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar_container';
import Footer from '../footer/footer';


class SplashPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.state;
    this.whichButton = this.whichButton.bind(this);
  }

  componentDidMount() {
    document.body.style.backgroundImage = "url('https://cache.desktopnexus.com/cropped-wallpapers/2353/2353798-1920x1080-[DesktopNexus.com].jpg?st=Gsec2x7-Z0xWWwPSdmvqkA&e=1570216831')";
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
    <>
    <Navbar /> 
    <div className="splash">
      <section className="splash-active">
        <div className="splash-active-text">
          <img className="splash-logo" src={window.beholdLogoBold} />
          <p>Behold is a website where students can showcase their works</p>
          <p>of art! Share your awesome creations for everyone to behold!</p>
        </div>
        {this.whichButton()}

      </section>
    </div>
    <Footer />
    </>
    )
  }
}

export default SplashPage;