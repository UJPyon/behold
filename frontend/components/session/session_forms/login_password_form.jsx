import React from 'react';

class LoginPasswordForm extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  
  render() {
    debugger
    return (
      <form
        className="session-all-inputs"
        onSubmit={this.props.handleSubmit}
        >
        <label htmlFor="pw">Password</label>
        <input
          className={this.props.inputBorderType(this.props.emailError) + "session-input"}
          id="pw"
          type="password"
          onChange={this.props.update("password")}
        />
        <p>{this.props.errorDoesExist(this.props.emailError)}</p>

        <input
          className="session-submit-button"
          type="submit"
          value={this.props.buttonText}
        />
      </form>
    )
  }
}

export default LoginPasswordForm;