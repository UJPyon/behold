import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ProfileAvatar from '../navbar/profile_avatar';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      project_id: this.props.projectId,
      author_id: this.props.currentUserId,
      error: "This field is required",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleModalClick = this.handleModalClick.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const comment = Object.assign({}, this.state);
    this.props.createNewComment(comment).then(() => {
      this.props.fetchProject(this.props.projectId);
      if (this.state.body) {
        this.setState({ body: "" });
        this.props.clearErrors();
      }
    });
  }

  handleModalClick() {
    this.props.closeModal();
  }

  update(body) {
    return (e) => {
      this.setState({ [body]: e.target.value });
    };
  }

  errorDoesExist(errorMsg) {
    if (this.props.errors.includes(errorMsg)) {
      return errorMsg;
    } else {
      return null;
    }
  }

  inputBorderType(errorMsg) {
    if (this.props.errors.includes(errorMsg)) {
      return "error-";
    } else {
      return "";
    }
  }

  render() {
    const placeholderText = "What are your thoughts on this project?"

    return (
    <form onSubmit={this.handleSubmit}>
      <div>
        <Link to={`/home/${this.props.currentUserId}`} onClick={this.handleModalClick}>
          <ProfileAvatar size={{ width: "52px", height: "52px" }} avatarUrl={this.props.currentUser.avatarUrl} />
        </Link>
        <textarea 
          className={this.inputBorderType(this.state.error) + "comment-form-textarea"}
          onChange={this.update("body")}
          value={this.state.body}
          placeholder={placeholderText}>
        </textarea>
      </div>
      <div>
        <p>{this.errorDoesExist(this.state.error)}</p>
        <input className="comment-form-button" type="submit" value="Post a Comment"/>
      </div>
    </form>
    );
  }
}

export default withRouter(CommentForm);