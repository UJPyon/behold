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
    this.state = {projects: this.props.projects};
    this.handleClick = this.handleClick.bind(this);
    this.handleModalClick = this.handleModalClick.bind(this);
  }

  componentDidMount() {
    this.props.receiveAllUsers();
    this.props.fetchProjects();
    this.props.fetchComments();
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push("/home");
  }

  handleModalClick(id) {
    this.props.openModal({modal: "open project", projectId: id});
  }

  render() {

    // --Map out all artist's projects as clickable images that leads to project modal--
    let projects;
    if (this.props.projects[0] !== undefined) {
    projects = this.props.projects.map(project => {
      return (
      <figure 
      onClick={() => this.handleModalClick(project.id)}
      className="project-mask" key={project.id} >
        <img
          onClick={() => this.handleModalClick(project.id)}
          src={project.imageUrls[0]}
        />
        <figcaption className="project-info">
          <h4 onClick={() => this.handleModalClick(project.id)}>{project.title}</h4>
          <Link to={`/home/${project.artistId}`} onClick={e => e.stopPropagation()}>
            <p>{this.props.artist.fname}&nbsp;{this.props.artist.lname}</p>
          </Link> 
        </figcaption>
      </figure>
      );
    });
    } else {
      projects = <figure></figure>;
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
            <p>{email}</p>
          </section>

          {/* About me text */}
          <section>
            <h3>ABOUT ME</h3>
            <p>{aboutMeInfo}</p>
          </section>

          {/* Link icons to Github & LinkedIn */}
          <section>
            <h3>LINKS</h3>
            <span>
              <a href="https://www.linkedin.com/in/unjae-pyon-9a833972?trk=people-guest_profile-result-card_result-card_full-click"><img className="profile-icon" src={window.linkedInDark} /></a>
              <a href="https://github.com/UJPyon"><img className="profile-icon" src={window.gitHubDark} /></a>
            </span>
          </section>

          {/* Member since date */}
          <DateJoined timestamp={createdAt}/>
        </div>
        </section>
        
        <section className="profile-projects">
          <div>
            {/* *--Future user category bar will go here--* */}
          </div>
          <div>
            {/* *--Future category NavBar will go here--* */}
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