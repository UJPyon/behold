import React from 'react';
import { withRouter } from 'react-router-dom';
import DateJoined from './date_joined';
import ProfileAvatar from '../navbar/profile_avatar';
// import ProjectContainer from '../project/project_container';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.artist = this.props.artist;
    this.state = {projects: this.props.projects};
    this.handleClick = this.handleClick.bind(this);
    this.handleModalClick = this.handleModalClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchProjects();
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
    projects = this.props.projects.map(projectId => {
      return (
        <figure key={projectId.id} >
          <img
            onClick={() => this.handleModalClick(projectId.id)}
            // src={projectId.imageUrls[0]}
            src={projectId.imageUrls[projectId.imageUrls.length - 1]}
          />

        </figure>
      );
    });
    } else {
      return <figure></figure>;
    }
    return (
    <>
      <section className="profile-banner">
      </section>

      <div className="profile-body">
        <section className="profile-about">
        <div>
          {/* Profile image */}
          <section>
            <ProfileAvatar />
          </section>

          <section>
          {/* First name & last name */}
            <h1>{this.artist.fname}&nbsp;{this.artist.lname}</h1>
            <h4>App Academy Student</h4>
            
            {/* Artist's email */}
            <p>{this.artist.email}</p>
          </section>

          {/* About me text */}
          <section>
            <h3>ABOUT ME</h3>
            <p>{this.artist.text}</p>
          </section>

          {/* Link icons to Github & LinkedIn */}
          <section>
            <h3>LINKS</h3>
            <span>
              <a href="https://github.com/UJPyon"><img className="home-footer-icon" src={window.gitHub} /></a>
              <a href="https://www.linkedin.com/in/unjae-pyon-9a833972?trk=people-guest_profile-result-card_result-card_full-click"><img className="home-footer-icon" src={window.linkedIn} /></a>
            </span>
          </section>

          {/* Member since date */}
          <DateJoined timestamp={this.artist.created_at}/>
        </div>
        </section>
        
        <section className="profile-projects">
          <div>
            *--Future user category bar will go here--*
          </div>
          <div>
            *--Future category NavBar will go here--*
          </div>

          {/* Profile-Project-Index */}       
          <ul className="profile-project-index">
            {/* list items of each project as Project Component */}
            {projects}

            {/* Temporary sample images */}
            <img src="https://c8.alamy.com/comp/PC1RN9/fun-fox-cartoon-illustration-isolate-on-white-background-PC1RN9.jpg"/>
            <img src="https://i.pinimg.com/236x/7b/f7/50/7bf75067651b931b26f371d41ac1d284--funny-illustration-cartoon-illustrations.jpg"/>
            <img src="https://previews.123rf.com/images/sabelskaya/sabelskaya1706/sabelskaya170600675/80648968-divertido-cuenco-sonriente-de-reques%C3%B3n-y-frambuesa-caracteres-de-bayas-de-zarzamora-ilustraci%C3%B3n-vectorial-.jpg"/>
            <img src="http://patswerk.nl/versie-2/wp-content/uploads/2017/07/OFFICE.png"/>
            <img src="https://cdn2.vectorstock.com/i/1000x1000/92/96/cute-funny-cartoon-red-fox-character-having-fun-vector-20639296.jpg"/>
            <img src="https://i.pinimg.com/236x/7b/f7/50/7bf75067651b931b26f371d41ac1d284--funny-illustration-cartoon-illustrations.jpg"/>
            <img src="https://previews.123rf.com/images/sabelskaya/sabelskaya1706/sabelskaya170600675/80648968-divertido-cuenco-sonriente-de-reques%C3%B3n-y-frambuesa-caracteres-de-bayas-de-zarzamora-ilustraci%C3%B3n-vectorial-.jpg"/>
            <img src="http://patswerk.nl/versie-2/wp-content/uploads/2017/07/OFFICE.png"/>
            <img src="https://cdn2.vectorstock.com/i/1000x1000/92/96/cute-funny-cartoon-red-fox-character-having-fun-vector-20639296.jpg"/>
          </ul>
        </section>
      </div>
      </>
    );
  }
}

export default withRouter(Profile);