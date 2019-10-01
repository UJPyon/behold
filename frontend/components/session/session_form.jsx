import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.history.push('/'));
  }

  handleDemoLogin() {
    const demoUser = {email: "ujpyon@gmail.com", password: "go_project_go"};
    this.props.demoLogin(demoUser);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {

    // --Splash page Sign In/Sign Up text--
    const title = this.props.formType === "Sign in" ? "Sign Up" : "Log In";    
    const path = this.props.formType === "Sign in" ? "/signup" : "/login";
    const text = this.props.formType === "Sign in" ? "New user?" : "Already have an account?";
    const buttonText = this.props.formType === "Sign in" ? "Sign in" : "Create account";

    // --Display errors (if any) as a collection of list items, one per error--
    let errors;
    if (this.props.errors.length !== 0) {
        errors = this.props.errors.map(error => {
        return <li key={error}>{error}</li>
      });
    }

    // --Display additional "first name" and "last name" inputs for creating a new account--
    let additionalFields = <div></div>;
    if (this.props.formType !== "Sign in") {
      additionalFields = (
        <div>
          <label>First name
            <input type="text" onChange={this.update("firstName")} />
          </label>
          <label>Last name
            <input type="text" onChange={this.update("lastName")} />
          </label>
        </div>
      );
    }

    // --Demo Login Button--
    const demoLogin = (
      <>
        <div>OR</div>
        <button onClick={this.handleDemoLogin}>Demo Login</button>
      </>
    );

    // --Splash page session form--
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>{this.props.formType}</h1>
            <p>{text}</p>&nbsp;<Link to={path}>{title}</Link>
          <ul>
            {errors}
          </ul>
          <label>Email
            <input type="text" onChange={this.update("email")}/>
          </label>

          {additionalFields}

          <label>Password
            <input type="password" onChange={this.update("password")}/>
          </label>
          <input type="submit" value={buttonText}/>
        </form>
        {demoLogin}
      </div>
    );
  }
}

export default withRouter(SessionForm);