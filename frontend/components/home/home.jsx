import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import Footer from '../footer/footer';
import { withRouter } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.body.style.backgroundImage = "";
    this.props.fetchProjects();
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push("/home");
  }

  render() {
    return (
    <div className="home">
      <nav className="home-navbar">
        <img onClick={this.handleClick} src={window.beholdLogoBold} />
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

export default withRouter(Home);