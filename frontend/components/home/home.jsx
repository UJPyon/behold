import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import Footer from '../footer/footer';

class Home extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    document.body.style.backgroundImage = "";
  }

  render() {
    return (
    <div className="home">
      <nav className="home-navbar">
        <img src="https://behold-aa.s3.us-east-2.amazonaws.com/behold_logo_bold.png" />
        <NavbarContainer />
      </nav>
      <section className="home-body">

      <h1>Temporary Home Text TEXT</h1>
      </section>

      <Footer />
    </div>
    );
  }
}

export default Home;