import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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
      }
    });
  }

  update(body) {
    return (e) => {
      // if (!this.state.body) {
      //   this.setState({ [body]: "Share your thoughts on this project."});
      // } else {
        this.setState({ [body]: e.target.value });
      // }
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
    return (
    <form onSubmit={this.handleSubmit}>
      <textarea 
        className={this.inputBorderType(this.state.error) + "comment-form-textarea"}
        // cols="10" 
        // rows="20" 
        onChange={this.update("body")}
        value={this.state.body}
      >
      </textarea>
      
      <div>
        <p>{this.errorDoesExist(this.state.error)}</p>
        <input className="comment-form-button" type="submit" value="Post a Comment"/>
      </div>
    </form>
    );
  }
}

export default CommentForm;