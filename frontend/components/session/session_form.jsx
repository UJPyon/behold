import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      fname: "",
      lname: "",
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
        <div className="session-input-name">
          <section>
            <label>First name</label>
            <input className="session-input-additional" id="fname" type="text" onChange={this.update("fname")} />
          </section>
          <section>
            <label>Last name</label>
            <input className="session-input-additional" id="lname" type="text" onChange={this.update("lname")} />
          </section>
        </div>
      );
    }

    // --Demo Login Button--
    const demoLogin = (
      <div className="session-demo">
        <span className="session-line">&nbsp;Or&nbsp;</span>
        <br/><br/>
        <button onClick={this.handleDemoLogin}>Demo Login</button>
      </div>
    );

    // --Splash page session form--
    return (
      <>
      <section>
        <img className="session-logo" src="https://behold-aa.s3.us-east-2.amazonaws.com/behold_logo.png"/>
      </section>
      <section className="session">
        {/* <img className="session-background" src="https://behold-aa.s3.us-east-2.amazonaws.com/signup_login_background.jpg"/> */}
        <form onSubmit={this.handleSubmit}>
          <h1>{this.props.formType}</h1>
            <div className="session-signup-login-link"><p>{text}</p>&nbsp;<Link to={path}>{title}</Link></div>
          <ul>
            {errors}
          </ul>
          <div className="session-all-inputs">
            <label htmlFor="email">Email</label>
            <input className="session-input"id="email" type="text" onChange={this.update("email")}/>

            {additionalFields}

            <label htmlFor="pw">Password</label>
            <input className="session-input" id="pw" type="password" onChange={this.update("password")}/>
            
            <input className="session-submit-button" type="submit" value={buttonText}/>
          </div>
        </form>
        {demoLogin}
      </section>
      </>
    );
  }
}

export default withRouter(SessionForm);