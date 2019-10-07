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
    document.body.style.backgroundColor = "#f9f9f9";
    this.props.fetchProjects();
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push("/home");
  }

  render() {
    return (
      <section className="home-body">
        <h1>Temporary Home Text (see profile for MVP 3)</h1>
      </section>
    );
  }
}

export default withRouter(Home);