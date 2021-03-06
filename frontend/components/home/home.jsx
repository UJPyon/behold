import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import Footer from '../footer/footer';
import { Link, withRouter } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.projects;
    this.handleClick = this.handleClick.bind(this);
    this.handleModalClick = this.handleModalClick.bind(this);
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
  }

  componentDidMount() {
    document.body.style.backgroundImage = "";
    document.body.style.backgroundColor = "#f9f9f9";
    this.props.fetchProjects();
    this.props.receiveAllUsers();
    this.props.fetchComments();
    this.props.fetchCategories();
  }
  
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push("/home");
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
    let categories = this.props.categories;
    // --This may look like a strange bit of conditional logic, but the first time the page is rendered there will only be the 
    // current user and no projects loaded, which is what makes these conditional checks necessary--
    if (this.props.projects[0] !== undefined && Object.values(this.props.users).length >= 2) {
      projects = this.props.projects.map(project => {
        // --Conditional rendering of project's category banner--
        const id = project.categoryIds[0];
        let category = <strong className="hide"></strong>;
        if (project.categoryIds.length) {
          category = <strong
            key={project.id}
            className={`category${id}`}
            onClick={(event) => this.handleCategoryClick({ e: event, id: id })}>
            {categories[id].tag}
            <span className={`category${id}-triangle-left`}></span>
            <span className={`category${id}-triangle-right`}></span>
          </strong>;
        }

        return (
          <figure
            onClick={() => this.handleModalClick(project.id)}
            className="project-mask" key={project.id} >
            <strong>
              
            </strong>
            <img
              onClick={() => this.handleModalClick(project.id)}
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
      return <figure></figure>;
    }

    // -------------------------
    // FINAL HOME RENDER RETURN: 
    // -------------------------
    return (
      <section className="home-body">
        <section className="home-banner">
          <h1>Discover & Behold</h1> 
          <h1>Creative Student Work</h1>
          <img src={window.homeBanner} />
        </section>

        <section>
          <h2>Projects from creatives just like you</h2>  
        </section>

        <ul className="home-project-index">
          {projects}
        </ul>
      </section>
    );
  }
}

export default withRouter(Home);