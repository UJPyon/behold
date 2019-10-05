import React from 'react';
import { withRouter } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';
import Footer from '../footer/footer';
import DateJoined from './dateJoined';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.artist = this.props.artist;
    this.projects = this.props.projects;
    this.createdDate = this.createdDate.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push("/home");
  }

  render() {
    return (
    <div className="profile">
      <nav className="home-navbar">
        <img onClick={this.handleClick} src={window.beholdLogoBold} />
        <NavbarContainer />
      </nav>
      <div className="profile-body">
        <section className="profile-banner">
          Profile-Banner
          {/* Present banner image */}
        </section>

        <section className="profile-about">
          Profile-About
          {/* Profile image */}

          {/* First name & last name */}
          <p>{this.artist.fname}&nbsp;{this.artist.lname}</p>

          {/* About me text */}
          <p>{this.artist.text}</p>

          {/* Link icons to Github & LinkedIn */}
          <a href="https://github.com/UJPyon"><img className="home-footer-icon" src={window.gitHub} /></a>
          <a href="https://www.linkedin.com/in/unjae-pyon-9a833972?trk=people-guest_profile-result-card_result-card_full-click"><img className="home-footer-icon" src={window.linkedIn} /></a>

          {/* Member since date */}
          <DateJoined timestamp={this.artist.created_at}/>
        </section>

        <section className="profile-project-index">
          Profile-Project-Index
          <ul>
            {/* list items of each project as Project Component */}
          </ul>
        </section>
      </div>
      <Footer />
    </div>
    );
  }
}

export default withRouter(Profile);