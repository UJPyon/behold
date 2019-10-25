import React from 'react';
import { withRouter } from 'react-router-dom';
import DateJoined from './date_joined';
import ProfileAvatar from '../navbar/profile_avatar';
import { Link } from 'react-router-dom';
// import ProjectContainer from '../project/project_container';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // this.artist = this.props.artist;
    this.state = {
      projects: this.props.projects,
      appreciatedProjects: this.props.appreciatedProjects,
      view: "userProjects",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleModalClick = this.handleModalClick.bind(this);
    this.handleViewSwitch = this.handleViewSwitch.bind(this);
    this.handleArtistClick = this.handleArtistClick.bind(this);
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
  }

  componentDidMount() {
    this.props.receiveAllUsers();
    this.props.fetchProjects();
    this.props.fetchComments();
    this.props.fetchCategories();
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push("/home");
  }

  handleCategoryClick({e, id}) {
    e.stopPropagation();
    this.props.history.push(`/home/category/${id}`);
  }

  handleModalClick(id) {
    this.props.openModal({modal: "open project", projectId: id});
  }

  handleViewSwitch(viewType) {
    if (this.state.view !== viewType) {
      this.setState({ view: viewType });
    }
  }

  handleArtistClick(e) {
    e.stopPropagation();
    this.setState({ view: "userProjects" })
  }

  render() {
  // -----------------------------------------------------------------------------
  // FOR SEEING ALL PROJECTS BY THAT ARTIST OR PROJECTS APPRECIATED BY THAT ARTIST
  // -----------------------------------------------------------------------------

    // --Conditional mapping of either all artist's projects or all artist's appreciated projects as clickable images that leads to project modal--
    let projects;
    let categoryCount = {};
    if (this.props.projects[0] !== undefined) {
      const currentProjects = (this.state.view === "userProjects") ? this.props.projects : this.props.appreciatedProjects;
      projects = currentProjects.map(project => {
        const id = project.categoryIds[0];
        // --Keep count of all project categories by this artist--
        categoryCount[id] === undefined && id !== undefined ? categoryCount[id] = 1 : categoryCount[id] += 1;
        // --Conditional rendering of project's category banner--
        let category = <strong className="hide"></strong>;
        if (project.categoryIds.length) {
          category = <strong 
          className={`category${id}`} 
          onClick={(event) => this.handleCategoryClick({e: event, id: id})}>
          {this.props.categories[id].tag}
          <span className={`category${id}-triangle-left`}></span>
          <span className={`category${id}-triangle-right`}></span>
        </strong>
      }
      // --Final return render for each project--
      return (
      <figure 
      onClick={() => this.handleModalClick(project.id)}
      className="project-mask" key={project.id}>
        <img
          onClick={() => this.handleModalClick(project.id)}
          src={project.imageUrls[0]}
        />
        {/* TESTING CODE BELOW FOR CATEGORIES */}
        {category}
        <figcaption className="project-info">
          <h4 onClick={() => this.handleModalClick(project.id)}>{project.title}</h4>
          <Link to={`/home/${project.artistId}`} onClick={e => this.handleArtistClick(e)}>
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

    // --Mapping out category counts and banners--
    let banners = <strong className="hide"></strong>;
    let catKeys = Object.keys(categoryCount);
    debugger
    if (catKeys.length) {
      banners = catKeys.map(id => {
        if (id !== "undefined") {
        return <> 
          <strong
            id={id}
            className={`profile-category${id}`}
            onClick={(event) => this.handleCategoryClick({ e: event, id: id })}>
            {this.props.categories[id].tag}
            <span className={`category${id}-triangle-left`}></span>
            <span className={`category${id}-triangle-right`}></span>
          </strong>
          <p id={id} className="category-count">{categoryCount[id]}</p>
        </>
        }
      });
    }

    // --Conditional logic for default ABOUT ME text if it is a new user:--
    let aboutMeInfo;
    if (!this.props.artist || !this.props.artist.text) {
      aboutMeInfo = "Welcome new user!";
    } else {
      aboutMeInfo = this.props.artist.text;
    }

    // --Conditional logic for when a user refreshes a page and data needs to be fetched again--
    let avatarUrl;
    if (!this.props.artist || !this.props.artist.avatarUrl) {
      avatarUrl = window.defaultAvatar;
    } else {
      avatarUrl = this.props.artist.avatarUrl;
    }
    let fname;
    let lname;
    let email;
    let createdAt;
    if (!this.props.artist) {
      fname = "";
      lname = "";
      email = "";
      createdAt = "";
    } else {
      fname = this.props.artist.fname;
      lname = this.props.artist.lname;
      email = this.props.artist.email;
      createdAt = this.props.artist.created_at;
    }

    // --Conditional logic for whether the user has a banner or to use the default banner--
    let bannerUrl;
    if (!this.props.artist) {
      // bannerUrl = <div style={{ backgroundColor: "#4b4b4b", width: "1920px", height: "210px"}}></div>;
      bannerUrl = window.defaultBanner;
    } else if (!this.props.artist.bannerUrl) {
      bannerUrl = window.defaultBanner;
    } else {
      bannerUrl = this.props.artist.bannerUrl;
    }

    // --Conditional logic for artist's appreciation count--
    let appreciationCount;
    if (!this.props.artist) {
      appreciationCount = 0;
    } else {
      appreciationCount = this.props.artist.appreciations;
    }

    // --Add click event listener that will add an active css class to whichever link is current selected--
    let linkClass1;
    let linkClass2;
    const baseClass = "profile-projects-link"
    if (this.state.view === "userProjects") {
      linkClass1 = baseClass + " p-active";
      linkClass2 = baseClass;
    } else {
      linkClass1 = baseClass;
      linkClass2 = baseClass + " p-active";
    }

    // document.getElementsByClassName("profile-projects-link");
    // for (let i = 0; i < linkClass.length; i++) {
    //   linkClass[i].addEventListener("click", () => {
    //     const current = document.getElementsByClassName("p-active");
    //     if (current.length > 0) {
    //       current[0].className = current[0].className.replace(" p-active", "");
    //     }
    //     this.className = this.className + " p-active";
    //   });
    // }

    // ----------------------------
    // FINAL PROFILE RENDER RETURN: 
    // ----------------------------
    return (
    <>
    {/* Profile banner */}
      <section className="profile-banner">
        <img src={bannerUrl}></img>
      </section>

      <div className="profile-body">
        <section className="profile-about">
        <div>
          {/* Profile image */}
          <section>
            <ProfileAvatar avatarUrl={avatarUrl}/>
          </section>

          <section>
          {/* First name & last name */}
            <h1>{fname}&nbsp;{lname}</h1>
            <h4>App Academy Student</h4>
            
            {/* Artist's email */}
            <h6>{email}</h6>
          </section>

          {/* About me text */}
          <section>
            <h3>ABOUT ME</h3>
            <p>{aboutMeInfo}</p>
          </section>

          <section className="profile-appr-counter">
            <h2>Appreciations</h2>
            <p>{appreciationCount}</p>
          </section>

          {/* Link icons to Github & LinkedIn */}
          <section>
            <h3>LINKS</h3>
            <span>
              <a href="https://www.linkedin.com/in/unjae-pyon-9a833972?trk=people-guest_profile-result-card_result-card_full-click">
                <img className="profile-icon" src={window.linkedInDark} />
              </a>
              <a href="https://github.com/UJPyon"><img className="profile-icon" src={window.gitHubDark} /></a>
            </span>
          </section>

          {/* Member since date */}
          <DateJoined timestamp={createdAt}/>
        </div>
        </section>
        
        <section className="profile-projects">
          <div className="profile-projects-categories">
            {/* *--Future user category bar will go here--* */}
            {banners}
          </div>
          <div>
            {/* *--Links to switch between user projects and user appreciated projects--* */}
            <h4 
            className={linkClass1}
            onClick={() => this.handleViewSwitch("userProjects")}>
              Work
            </h4>
            <h4 
            className={linkClass2}
            onClick={() => this.handleViewSwitch("appreciatedProjects")}>
              Appreciations
            </h4>
          </div>

          {/* Profile-Project-Index */}       
          <ul className="profile-project-index">
            {/* list items of each project as Project Component */}
            {projects}
            <figure></figure>
            <figure></figure>
            <figure></figure>
            <figure></figure>
          </ul>

        </section>
      </div>
      </>
    );
  }
}

export default withRouter(Profile);