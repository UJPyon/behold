import React from 'react';
import { withRouter } from 'react-router-dom';

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.project;
  }

  componentDidMount() {
    // Fetch the project images
    const projectId = this.props.projectId;
    this.props.fetchProject(projectId);
  }

  render() {
    debugger
    let images;
    if (this.props.imageUrls[0] !== undefined) {
      images = this.props.imageUrls.map(url => {
        return (
          <figure key={url} className="project-image"><img src="url"/></figure>
        );
      })
    } else {
      images = <figure className="project-image-loading"></figure>
    }

    return (
    <>
      {/* All images load here */}
      {images}

      {/* Comment section & author info */}
      <section className="project-section-info">
        <div>
          {/* Project title */}
          <p>{this.state.title}</p>

          {/* Project author name */}
          <p>{this.props.artist.fname}&nbsp;{this.props.artist.lname}</p>
        </div>

        <div>
          25
          {/* Appreciation count will go here in future feature */}
        </div>
      </section>
    </>
    );
  }
}

export default withRouter(Project);