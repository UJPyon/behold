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
        <img src={window.beholdLogoBold} />
        <NavbarContainer />
      </nav>
      <section className="home-body">

      <h1>Temporary Home Text</h1>
      </section>

      <Footer />
    </div>
    );
  }
}

export default Home;