import React from 'react';
import ProfileAvatar from '../navbar/profile_avatar';
import { Link, withRouter } from 'react-router-dom';
import CommentForm from '../comment/comment_form_container';

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.project;
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
    this.handleModalClick = this.handleModalClick.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
    this.handleLikeClick = this.handleLikeClick.bind(this);
    this.handleUnlikeClick = this.handleUnlikeClick.bind(this);
  }

  handleCategoryClick(id) {
    this.props.closeModal();
    this.props.history.push(`/home/category/${id}`);
  }

  handleModalClick() {
    this.props.closeModal();
  }

  handleLikeClick(projectId) {
    this.props.createAppreciation(projectId).then(() => {
      const userId = this.props.currentUser.id;
      const currentProjectId = this.state.id;
      this.props.addAppreciationToUser({ projectId: currentProjectId, userId: userId });
    });
  }

  handleUnlikeClick(id) {
    this.props.removeAppreciation(id).then(() => {
      const userId = this.props.currentUser.id;
      const currentProjectId = this.state.id;
      this.props.removeAppreciationFromUser({ projectId: currentProjectId, userId: userId });
    });
  }

  deleteComment(commentId) {
    const projectId = this.state.id;
    this.props.deleteComment({commentId: commentId, projectId: projectId});
  }

  render() {

    // --Conditional button for appreciations--
    let likeButton;
    if (!this.props.currentUser.appreciatedProjectIds.includes(this.state.id)) {
      likeButton = 
      <button className="project-section-like-button" onClick={() => this.handleLikeClick(this.state.id)}>
        <i className='fas'>&#xf164;</i>
      </button>
    } else {
      likeButton = 
      <button className="project-section-unlike-button" onClick={() => this.handleUnlikeClick(this.state.id)}>
        <i className='fas'>&#xf164;</i>
        <p>{this.props.project.appreciations}</p>
      </button>
    }

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

        // --Conditional that displays X to delete comment only if the current user is the author--
        let deleteComment;
        if (this.props.currentUser.id === authorId) {
          deleteComment = <span className="comment-delete" onClick={() => this.deleteComment(comment.id)}>&times;</span>;
        } else {
          deleteComment = <span></span>;
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
      comments = comments.sort((a, b) => (a.key > b.key) ? 1 : -1).reverse();
    }

    const catId = this.props.categoryId;
    let tag = <strong></strong>;
    if (this.props.category) {
      tag = this.props.category.tag;
    }
    // ----------------------------
    // FINAL PROJECT RENDER RETURN: 
    // ----------------------------
    return (
    <>
    {/* Project header with artist avatar, artist name, project category, and project title */}
    <header className="project-header">
      <Link to={`/home/${this.props.artist.id}`} onClick={this.handleModalClick}>
        <ProfileAvatar avatarUrl={this.props.artist.avatarUrl} size={{ width: "40px", height: "40px" }} />
      </Link>
      <div>
        <h1>{this.state.title}</h1>
        <Link to={`/home/${this.props.artist.id}`} onClick={this.handleModalClick}>{this.props.artist.fname}&nbsp;{this.props.artist.lname}</Link>
      </div>
      {/* Clickable Project Category Banner */}
      <strong
        className={`project-category${catId}`}
        onClick={() => this.handleCategoryClick(catId)}>
        {tag}
        <span className={`project-category${catId}-triangle-left`}></span>
        <span className={`project-category${catId}-triangle-right`}></span>
      </strong>
    </header>

      {/* All images load here */}
      {images}

      {/* Appreciation section */}
      <section className="project-section-appreciation">
        {/* Appreciate button & project title */}
        {likeButton}
        <h2>{this.state.title}</h2>

        <div className="project-section-appr-counters">
          {/* Appreciation & comment count */}
          <div>
            <i className='fas'>&#xf164;</i>
            <p>{this.props.project.appreciations}</p>
          </div>
          <div>
            <i className='fas'>&#xf27a;</i>
            <p>{this.props.project.commentIds.length}</p>
          </div>
        </div>
      </section>

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

              <div className="project-section-counters">
                {/* Appreciation & comment count */}
                <div>
                  <i className='fas'>&#xf164;</i>
                  <p>{this.props.project.appreciations}</p>
                </div>
                <div>
                  <i className='fas'>&#xf27a;</i>
                  <p>{this.props.project.commentIds.length}</p>
                </div>
              </div>
            </section>
          </section>

        </section>
      </div>
    </>
    );
  }
}

export default withRouter(Project);