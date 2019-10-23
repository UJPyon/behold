import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import Footer from '../footer/footer';
import { Link } from 'react-router-dom';

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.handleModalClick = this.handleModalClick.bind(this);
  }


  handleModalClick(id) {
    this.props.openModal({ modal: "open project", projectId: id });
  }

  render() {

    let projects;
    // --This may look like a strange bit of conditional logic, but the first time the page is rendered there will only be the 
    // current user and no projects loaded, which is what makes these conditional checks necessary--
    if (this.props.projects[0] !== undefined && Object.values(this.props.users).length >= 2) {
      projects = this.props.projects.map(project => {
        return (
          <figure
            onClick={() => this.handleModalClick(project.id)}
            className="project-mask" key={project.id} >
            <img
              onClick={() => this.handleModalClick(project.id)}
              // --Grab the first image in the project set OR switch out for line after for last image in project--
              src={project.imageUrls[0]}
            // src={project.imageUrls[project.imageUrls.length - 1]}
            />
            <figcaption className="project-info">
              <h4 onClick={() => this.handleModalClick(project.id)}>{project.title}</h4>
              <Link to={`/home/${project.artistId}`} onClick={e => e.stopPropagation()}>
                <p>{this.props.users[project.artistId].fname}&nbsp;{this.props.users[project.artistId].lname}</p>
              </Link>
              <div>
                <i className='fas'>&#xf164;</i>
                <h5>{project.appreciations}</h5>
              </div>
            </figcaption>
          </figure>
        );
      });
    } else {
      return <figure></figure>;
    }

    // -----------------------------
    // FINAL CATEGORY RENDER RETURN: 
    // -----------------------------
    return (
      <section className="home-body">
        <section>
          <h2>{}</h2>
        </section>

        <ul className="home-project-index">
          {projects}
        </ul>
      </section>
    );
  }
}

export default Category;