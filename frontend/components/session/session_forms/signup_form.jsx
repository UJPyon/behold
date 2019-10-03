import React from 'react';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Sign in</h1>
        <div className="session-signup-login-link"><p>Already have an account?</p>&nbsp;<Link to='/login'>Log In</Link></div>

      <div className="session-all-inputs">
        <label htmlFor="email">Email address</label>
        <input
          className={this.props.inputBorderType(this.props.error1) + "session-input"}
          id="email"
          type="email"
          onChange={this.props.update("email")}
        />
        <p>{this.props.errorDoesExist(this.props.error1)}</p>

        <div className="session-input-name">
          <section>
            <label>First name</label>
            <input
              className={this.props.inputBorderType(this.props.error3) + "session-input-additional"}
              id="fname" type="text"
              onChange={this.props.update("fname")}
            />
            <p>{this.props.errorDoesExist(this.state.error3)}</p>
          </section>
          <section>
            <label>Last name</label>
            <input
              className={this.props.inputBorderType(this.props.error4) + "session-input-additional"}
              id="lname"
              type="text"
              onChange={this.update("lname")}
            />
            <p>{this.props.errorDoesExist(this.props.error4)}</p>
          </section>
        </div>

        <label htmlFor="pw">Password</label>
        <input
          className={this.props.inputBorderType(this.props.error2) + "session-input"}
          id="pw"
          type="password"
          onChange={this.props.update("password")}
        />
        <p>{this.props.errorDoesExist(this.props.error2)}</p>

        <input
          className="session-submit-button"
          type="submit"
          value={this.props.buttonText}
        />
      </div>
    </form>
    );
  }
}

export default SignUpForm;