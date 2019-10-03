import React from 'react';

class LoginEmailForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form 
        className="session-all-inputs" 
        onSubmit={this.props.handleEmailSubmit}
        >

        <label htmlFor="email">Email address</label>
        <input
          className={this.props.inputBorderType(this.props.emailError) + "session-input"}
          id="email"
          type="email"
          onChange={this.props.update("email")}
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

export default LoginEmailForm;