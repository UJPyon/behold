import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class LoginPasswordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.email || "",
      password: "",
      error: "Invalid credentials. Please try again.",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.inputBorderType = this.inputBorderType.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.history.push('/'));
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
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

      <form className="session-form-animate" onSubmit={this.handleSubmit}>
      <div className="session-header-login">
        <h1>Welcome back</h1>
        <div className="session-signup-login-link"><div>New user?</div>&nbsp;<Link to="/signup">Create a new account</Link></div>
      </div>
        <label htmlFor="pw">Password</label>
        <input
          className={this.inputBorderType(this.state.error) + "session-input"}
          id="pw"
          type="password"
          onChange={this.update("password")}
        />
        <p>{this.errorDoesExist(this.state.error)}</p>

        <input
          className="session-submit-button"
          type="submit"
          value="Sign in"
        />
      </form>
    )
  }
}

export default withRouter(LoginPasswordForm);