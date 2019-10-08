import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import Footer from '../footer/footer';
import { Link, withRouter } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = this.props.projects || {};
    this.handleModalClick = this.handleModalClick.bind(this);
  }

  componentDidMount() {
    document.body.style.backgroundImage = "";
    document.body.style.backgroundColor = "#f9f9f9";
    this.props.fetchProjects();
    this.props.receiveAllUsers();
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push("/home");
  }

  handleModalClick(id) {
    this.props.openModal({ modal: "open project", projectId: id });
  }

  render() {

    let projects;
    // This may look like a strange bit of conditional logic, but the first time the page is rendered there will only be the 
    // current user and no projects loaded, which is what makes these conditional checks necessary
    if (this.props.projects[0] !== undefined && Object.values(this.props.users).length >= 2) {
      projects = this.props.projects.map(project => {
        return (
          <figure
            onClick={() => this.handleModalClick(project.id)}
            className="project-mask" key={project.id} >
            <img
              onClick={() => this.handleModalClick(project.id)}
              // Grab the first image in the project set OR switch out for line after for last image in project
              src={project.imageUrls[0]}
            // src={project.imageUrls[project.imageUrls.length - 1]}
            />
            <figcaption className="project-info">
              <h4 onClick={() => this.handleModalClick(project.id)}>{project.title}</h4>
              <Link to={`/home/${project.artistId}`}>
                <p>{this.props.users[project.artistId].fname}&nbsp;{this.props.users[project.artistId].lname}</p>
              </Link>
            </figcaption>
          </figure>
        );
      });
    } else {
      return <figure></figure>;
    }

    return (
      <section className="home-body">
        <section className="home-banner">
          <img src="" />
        </section>
        <ul className="profile-project-index">
          {projects}
        </ul>
      </section>
    );
  }
}

export default withRouter(Home);