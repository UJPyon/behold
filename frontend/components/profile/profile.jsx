import React from 'react';
import { withRouter } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    <>
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
    </>
  }
}

export default withRouter(Profile);