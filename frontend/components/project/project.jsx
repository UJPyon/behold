import React from 'react';
import { withRouter } from 'react-router-dom';

class Project extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Fetch the project images
    const projectId = this.props.projectId;
    this.props.fetchProject(projectId);
  }

  render() {
    return (
    <>
      <figure></figure>
      <section>
        <div>
          <p>{/* Project title */}</p>
          <p>{/* Project author name */}</p>
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