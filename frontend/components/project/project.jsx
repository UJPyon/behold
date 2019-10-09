import React from 'react';
import ProfileAvatar from '../navbar/profile_avatar';
import { Link } from 'react-router-dom';
import CommentForm from '../comment/comment_form_container';

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.project;
    this.handleModalClick = this.handleModalClick.bind(this);
  }

  handleModalClick() {
    this.props.closeModal();
  }

  render() {
    // --Map out all images for this particular project--
    let images;
    if (this.props.imageUrls[0] !== undefined) {
      images = this.props.imageUrls.map(url => {
        return (
          <figure key={url} className="project-image"><img src={url}/></figure>
        );
      })
    } else {
      images = <figure className="project-image-loading"></figure>;
    }

    debugger
    // --Map out all comments for this particular project--
    let comments;
    if (this.props.comments[0] !== undefined ) {
      comments = this.props.comments.map(comment => {
        return (
          <li>
            <p key={comment}>{comment}</p> 
          </li>
        );
      });
    } else {
      // TESTING CODE BELOW: CREATE CLASS IN CSS FOR LOADING COMMENTS
      comments = <p className="loading-comments"></p>;
    }

    debugger
    return (
      // onClick = { this.closeModal }
    <>
    <header className="project-header">
          <Link to={`/home/${this.props.artist.id}`} onClick={this.handleModalClick}>
            <ProfileAvatar avatarUrl={this.props.artist.avatarUrl} size={{ width: "40px", height: "40px" }} />
          </Link>
      <div>
        <h1>{this.state.title}</h1>
        <Link to={`/home/${this.props.artist.id}`}>{this.props.artist.fname}&nbsp;{this.props.artist.lname}</Link>
      </div>
    </header>
      {/* All images load here */}
      {images}

      {/* Comment section & author info */}
      <div>
        <section className="project-section-info">
          {/* Comment section */}
          <section className="project-section-info-comments">
          <CommentForm />
          <ul>
            {comments}
          </ul>
          </section>

          <section className="project-section-info-user">
            <section>
              <ProfileAvatar avatarUrl={this.props.artist.avatarUrl} size={{width: "40px", height: "40px"}}/>
              {/* Project author name */}
              <div>
                <h4>OWNER</h4>
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