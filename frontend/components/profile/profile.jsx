import React from 'react';
import { withRouter } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';
import Footer from '../footer/footer';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // componentDidMount() {
  //   this.props.fetchProjects();
  // }

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
          {/* About me text */}
          {/* Link icons to Github & LinkedIn */}
          {/* Member since date */}
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