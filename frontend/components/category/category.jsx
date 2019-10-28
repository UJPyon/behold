import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import Footer from '../footer/footer';
import { Link, withRouter } from 'react-router-dom';

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.handleModalClick = this.handleModalClick.bind(this);
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
  }

  componentDidMount() {
    this.props.receiveAllUsers();
    this.props.fetchComments();
    this.props.fetchCategories();
    this.props.fetchProjects();
  }

  handleModalClick(id) {
    this.props.openModal({ modal: "open project", projectId: id });
  }

  handleCategoryClick({ e, id }) {
    e.stopPropagation();
    this.props.history.push(`/home/category/${id}`);
  }

  render() {

    let projects;
    // --This may look like a strange bit of conditional logic, but the first time the page is rendered there will only be the 
    // current user and no projects loaded, which is what makes these conditional checks necessary--
    if (this.props.categoryProjects[0] !== undefined && Object.values(this.props.users).length >= 2) {
      projects = this.props.categoryProjects.map(project => {
        // --Conditional rendering of project's category banner--
        const id = project.categoryIds[0];
        let category = <strong className="hide"></strong>;
        if (project.categoryIds.length) {
          category = <strong
            key={project.id}
            className={`category${id}`}
            onClick={(event) => this.handleCategoryClick({ e: event, id: id })}>
            {this.props.categories[id].tag}
            <span className={`category${id}-triangle-left`}></span>
            <span className={`category${id}-triangle-right`}></span>
          </strong>;
        }
        
        return (
          <figure
            onClick={() => this.handleModalClick(project.id)}
            className="project-mask" key={project.id}>
            <img onClick={() => this.handleModalClick(project.id)}
              // --Grab the first image in the project set OR switch out for line after for last image in project--
              src={project.imageUrls[0]}
            // src={project.imageUrls[project.imageUrls.length - 1]}
            />
            {/* --Project category banner-- */}
            {category}
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
      projects = <figure></figure>;
    }

    // --Conditional logic to display project name & description upon refreshing page--
    let projectName = "";
    let projectDescription = "";
    if (this.props.categories[this.props.categoryId] !== undefined) {
      projectName = this.props.categories[this.props.categoryId].name;
      projectDescription = this.props.categories[this.props.categoryId].description;
    }

    // -----------------------------
    // FINAL CATEGORY RENDER RETURN: 
    // -----------------------------
    return (
      <section className="home-body">
        <section className="categories-header">
          <h2>{projectName}</h2>
          <h3>{projectDescription}</h3>
        </section>

        <ul className="home-project-index">
          {projects}
          <figure></figure>
          <figure></figure>
          <figure></figure>
          <figure></figure>
        </ul>
      </section>
    );
  }
}

export default withRouter(Category);