import React from 'react';

class LoginPasswordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
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
    const buttonText = this.props.formType === "Sign in" ? "Sign in" : "Create account";

    return (
      <form onSubmit={this.handleSubmit}>
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
          value={buttonText}
        />
      </form>
    )
  }
}

export default LoginPasswordForm;