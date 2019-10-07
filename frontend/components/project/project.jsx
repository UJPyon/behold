import React from 'react';
import ProfileAvatar from '../navbar/profile_avatar';

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.project;
  }

  render() {
    let images;
    if (this.props.imageUrls[0] !== undefined) {
      images = this.props.imageUrls.map(url => {
        return (
          <figure key={url} className="project-image"><img src={url}/></figure>
        );
      })
    } else {
      images = <figure className="project-image-loading"></figure>
    }
    return (
    <>
    <header>
      <h1>{this.state.title}</h1>
      <h2>{this.props.artist.fname}</h2>
    </header>
      {/* All images load here */}
      {images}

      {/* Comment section & author info */}
      <div>
        <section className="project-section-info">
          {/* Comment section */}
          <section className="project-section-info-comments">
            <p>FUTURE COMMENTS GO HERE</p>
            <p>FUTURE COMMENTS GO HERE</p>
            <p>FUTURE COMMENTS GO HERE</p>
            <p>FUTURE COMMENTS GO HERE</p>
            <p>FUTURE COMMENTS GO HERE</p>
            <p>FUTURE COMMENTS GO HERE</p>
          </section>

          <section className="project-section-info-user">
            <section>
              <ProfileAvatar size={{width: "60px", height: "60px"}}/>
              {/* Project author name */}
              <div>
                <h4>Owner:</h4>
                <p>{this.props.artist.fname}&nbsp;{this.props.artist.lname}</p>
              </div>
            </section>

            <section>
              {/* Project title */}
              <h1>{this.state.title}</h1>

              {/* Project description */}
              <p>{this.state.description}</p>

              <div>
                {/* Appreciation count will go here in future feature */}
                FUTURE APPRECIATIONS: 25
              </div>
            </section>
          </section>

        </section>
      </div>
    </>
    );
  }
}

export default Project;