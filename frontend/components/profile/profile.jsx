import React from 'react';
import { withRouter } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';
import Footer from '../footer/footer';
import DateJoined from './date_joined';
import ProjectContainer from '../project/project_container';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.artist = this.props.artist;
    this.projects = this.props.projects;
    this.mapProjects = this.mapProjects.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push("/home");
  }

  // --Returns a mapped list of the 1st images from each owned project to display--
  mapProjects() {
    const projects = this.projects.map(projectId => {

      return (
        <figure key={projectId} >
          <img 
          onClick={() => this.props.openModal("open project")} 
          src={projectId.imageUrls[0]} 
          />
        </figure>
      );
    });
    return projects;
  }

  render() {

    return (
    <>
      <section className="profile-banner">
      </section>

      <div className="profile-body">
        <section className="profile-about">
          <div>
          Profile-About
          {/* Profile image */}


          {/* First name & last name */}
          <p>{this.artist.fname}&nbsp;{this.artist.lname}</p>

          {/* Artist's email */}
          <p>{this.artist.email}</p>

          {/* About me text */}
          <p>{this.artist.text}</p>

          {/* Link icons to Github & LinkedIn */}
          <a href="https://github.com/UJPyon"><img className="home-footer-icon" src={window.gitHub} /></a>
          <a href="https://www.linkedin.com/in/unjae-pyon-9a833972?trk=people-guest_profile-result-card_result-card_full-click"><img className="home-footer-icon" src={window.linkedIn} /></a>

          {/* Member since date */}
          <DateJoined timestamp={this.artist.created_at}/>
          </div>
        </section>
        
        <section className="profile-projects">
          <div>
            *--Future category NavBar will go here--*
          </div>
          <div>
            *--Future user category bar will go here--*
          </div>

          <ul className="profile-project-index">
          {/* Profile-Project-Index */}       
          {/* list items of each project as Project Component */}
            {this.mapProjects()}

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