import React from 'react';
import ProfileAvatar from '../navbar/profile_avatar';
import { Link } from 'react-router-dom';
import CommentForm from '../comment/comment_form_container';

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.project;
    this.handleModalClick = this.handleModalClick.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }

  handleModalClick() {
    this.props.closeModal();
  }

  deleteComment(commentId) {
    const projectId = this.state.id;
    this.props.deleteComment({commentId: commentId, projectId: projectId});
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

    // --Map out all comments for this particular project--
    let comments;
    if (this.props.comments[0] !== undefined ) {
      comments = this.props.comments.map(comment => {
        const authorId = comment.authorId;
        const author = this.props.users[authorId];

        // --Conditional that displays X to delete comment only if the current user is the owner--
        let deleteComment;
        if (this.props.currentUser.id === authorId) {
          deleteComment = <span className="comment-delete" onClick={() => this.deleteComment(comment.id)}>&times;</span>;
        } else {
          deleteComment = <span></span>
        }

        return (
          <li key={comment.id}>

            {/* Comment Author's Avatar */}
            <div>
              <Link to={`/home/${authorId}`} onClick={this.handleModalClick}>
                <ProfileAvatar size={{ width: "52px", height: "52px" }} avatarUrl={author.avatarUrl} />
              </Link> 
            </div>

            {/* Comment Author's Name & the Comment Body */}
            <div>
              <Link to={`/home/${authorId}`} onClick={this.handleModalClick}>
                {author.fname}&nbsp;{author.lname}
              </Link>
              <p>{comment.body}</p> 
            </div>

            {/* X Button to Delete Comment */}
            {deleteComment}

          </li>
        );
      });
    } else {
      // TESTING CODE BELOW: CREATE CLASS IN CSS FOR LOADING COMMENTS
      comments = <p className="loading-comments"></p>;
    }
    // If there are no existing comments, don't call reverse or it'll error out!
    if (comments.length) {
      comments = comments.reverse();
    }

    // ----------------------------
    // FINAL PROJECT RENDER RETURN: 
    // ----------------------------
    return (
    <>
    {/* Project header with artist avatar, artist name, and project title */}
    <header className="project-header">
      <Link to={`/home/${this.props.artist.id}`} onClick={this.handleModalClick}>
        <ProfileAvatar avatarUrl={this.props.artist.avatarUrl} size={{ width: "40px", height: "40px" }} />
      </Link>
      <div>
        <h1>{this.state.title}</h1>
        <Link to={`/home/${this.props.artist.id}`} onClick={this.handleModalClick}>{this.props.artist.fname}&nbsp;{this.props.artist.lname}</Link>
      </div>
    </header>

      {/* All images load here */}
      {images}

      {/* Comment section & author info */}
      <div>
        <section className="project-section-info">
          {/* Comment section */}
          <section className="project-section-info-comments">
          <CommentForm projectId={this.state.id}/>
          <ul className="comments">
            {comments}
          </ul>
          </section>

          <section className="project-section-info-user">
            <section>
              <Link to={`/home/${this.props.artist.id}`} onClick={this.handleModalClick}>
                <ProfileAvatar avatarUrl={this.props.artist.avatarUrl} size={{width: "40px", height: "40px"}}/>
              </Link>
              {/* Project author name */}
              <div>
                <h4>OWNER</h4>
                <Link to={`/home/${this.props.artist.id}`} onClick={this.handleModalClick}>
                  {this.props.artist.fname}&nbsp;{this.props.artist.lname}
                </Link>
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