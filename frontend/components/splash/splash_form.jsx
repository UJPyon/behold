import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar_container';
import Footer from '../footer/footer';
import Logo from './splash_logo';


class SplashPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.state;
    this.whichButton = this.whichButton.bind(this);
  }

  componentDidMount() {
    document.body.style.backgroundImage = "linear-gradient(to top, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%)";
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
        <Logo />
        <div className="splash-active-text">
          {/* <img className="splash-logo" src={window.beholdLogoBold} /> */}
          <h2>Artwork for students, by students.</h2>
          <p>Behold is a website for showcasing works of art. Join today and view awesome student creations!</p>
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