import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      error: "This field is required",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const comment = Object.assign({}, this.state);
    this.props.processForm(comment).then(() => this.props.fetchComments());
    // const user = Object.assign({}, this.state);
    // this.props.processForm(user).then(() => this.props.history.push('/home'));
  }

  update(body) {
    return (e) => {
      if (!this.state.body) {
        this.setState({ [body]: "Share your thoughts on this project."});
      } else {
        this.setState({ [body]: e.target.value });
      }
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
    <form 
      onSubmit={this.handleSubmit}
      // --NEED TO FIGURE OUT DEFAULT ERROR: SOMETHING LIKE "CANNOT BE BLANK"--
      className={this.inputBorderType(this.state.error) + "comment-input"}
    >
      <textarea 
        name="" 
        // cols="10" 
        // rows="20" 
        onChange={this.update("body")}
        value={this.state.body}
      >
      </textarea>
      
      <p>{this.errorDoesExist(this.state.error)}</p>
      <input type="submit" value="Post a Comment"/>
    </form>
    );
  }
}

export default CommentForm;