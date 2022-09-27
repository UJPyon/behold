import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import LoginPasswordForm from './login_password_form_container';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      fname: "",
      lname: "",
      error1: "Please enter an email address.",
      error2: "Password must be at least 6 characters.",
      error3: "Please enter your first name.",
      error4: "Please enter your last name.",
      error5: "Invalid credentials. Please try again.",
      error6: "Check your email address or ",
      error7: "An account with this email address already exists.",
      loginNextStep: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
    this.handleEmailSubmit = this.handleEmailSubmit.bind(this);
    this.update = this.update.bind(this);
    this.inputBorderType = this.inputBorderType.bind(this);
    this.whichForm = this.whichForm.bind(this);
    this.errorLink = this.errorLink.bind(this);
  }

  componentDidMount() {
    document.body.style.backgroundImage = "url('https://imgur.com/HPABVUs')";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.history.push('/home'));
  }

  handleEmailSubmit(e) {
    this.props.clearErrors();
    e.preventDefault();
    this.props.userExists(this.state.email)
    .then(() => {
      if (!this.props.errors.length) {
        this.setState({loginNextStep: true});
      }
    })
  }

  handleDemoLogin() {
    const demoUser = { email: "ujpyon@gmail.com", password: "go_project_go" };
    this.props.demoLogin(demoUser).then(() => this.props.history.push('/home'));
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  // --Method for displaying errors if it exists, or an empty placeholder if it doesn't
  errorDoesExist(errorMsg, additErrorMsg = null) {
    if (this.props.errors.includes(errorMsg)) {
      return errorMsg;
    } else if (this.props.errors.includes(additErrorMsg)) {
      return additErrorMsg;
    } else {
      return null;
    }
  }

  // --Method to display form input classes with or without errors
  inputBorderType(errorMsg, additErrorMsg = null) {
    if (this.props.errors.includes(errorMsg) || this.props.errors.includes(additErrorMsg)) {
      return "error-";
    } else {
      return "";
    }
  }

  errorLink(errorMsg) {
    if (this.props.errors.includes(errorMsg) && errorMsg === "Check your email address or ") {
      return <Link className="session-input-link-text" to="/signup">&nbsp;create a new account</Link>;
    } else if (this.props.errors.includes(errorMsg) && errorMsg === "An account with this email address already exists.") {
      return <Link className="session-input-link-text" to="/login">Sign in</Link>;
    } else {
      return "";
    }
  }

  // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  // %%%%%%%%% FREEZA: THIS ISN'T EVEN MY FINAL FORM %%%%%%%%%%
  // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  // --Logic to decide which login/signup form to render--
  whichForm() {
    if ((this.props.formType === "Sign in" && this.state.loginNextStep === false) || this.props.errors.includes("Check your email address or ")) {
      return (
        <form onSubmit={this.handleEmailSubmit}>
          <div className="session-header-login">
            <h1>{this.props.formType}</h1>
            <div className="session-signup-login-link"><div>New user?</div>&nbsp;<Link to="/signup">Create a new account</Link></div>
          </div>
          <label htmlFor="email">Email address</label>
          <input
            className={this.inputBorderType(this.state.error6) + "session-input"}
            id="email"
            type="email"
            onChange={this.update("email")}
          />
          <div className="session-input-link">
            <p>{this.errorDoesExist(this.state.error6)}</p>
            {this.errorLink(this.state.error6)}
          </div>
          <input
            className="session-submit-button"
            type="submit"
            value="Continue"
          />
        </form>
      );
    } else if (this.state.email && this.state.loginNextStep === true && !this.props.errors.includes("Check your email addess or ")) {
      return <LoginPasswordForm email={this.state.email} />;
    } else if (this.props.formType !== "Sign in") {
      return (
        <section>
          
          {/* --SIGN UP FORM-- */}
          <form onSubmit={this.handleSubmit}>

            {/* Sign up form header with link to switch forms */}
            <div className="session-header">
              <h1>{this.props.formType}</h1>
              <div className="session-signup-login-link"><div>Already have an account?</div>&nbsp;<Link to="/login">Log in</Link></div>
            </div>
            <div className="session-all-inputs">
              
              {/* Email input */}
              <section>
                <label htmlFor="email">Email address</label>
                {/* Conditional errors rendering through class name */}
                <input
                  className={this.inputBorderType(this.state.error1, this.state.error7) + "session-input"}
                  id="email"
                  type="email"
                  onChange={this.update("email")}
                />
                {/* Conditional error display depending on input error; error 7 includes a link to switch forms */}
                <p>{this.errorDoesExist(this.state.error1, this.state.error7)}&nbsp;{this.errorLink(this.state.error7)}</p>
              
              </section>
              <div className="session-input-name">
                <section>
                  <label>First name</label>
                  <input
                    className={this.inputBorderType(this.state.error3) + "session-input-additional"}
                    id="fname" type="text"
                    onChange={this.update("fname")}
                  />
                  <p>{this.errorDoesExist(this.state.error3)}</p>
                </section>
                <section>
                  <label>Last name</label>
                  <input
                    className={this.inputBorderType(this.state.error4) + "session-input-additional"}
                    id="lname"
                    type="text"
                    onChange={this.update("lname")}
                  />
                  <p>{this.errorDoesExist(this.state.error4)}</p>
                </section>
              </div>
              <section>
                <label htmlFor="pw">Password</label>
                <input
                  className={this.inputBorderType(this.state.error2) + "session-input"}
                  id="pw"
                  type="password"
                  onChange={this.update("password")}
                />
                <p>{this.errorDoesExist(this.state.error2)}</p>
              </section>

              <input
                className="session-submit-button"
                type="submit"
                value="Create account"
              />
            </div>
          </form>
        </section>
      );
    }
  }

  render() {

    // --Demo Login Button--
    const demoLogin = (
      <div className="session-demo">
        <span className="session-line">&nbsp;Or&nbsp;</span>
        <br /><br />
        <button onClick={this.handleDemoLogin}>Demo Login</button>
      </div>
    );

    // ----------------------------
    // FINAL PROFILE RENDER RETURN: 
    // ----------------------------
    return (
      <div className="main-session-containers">
        <section>
          <img className="session-logo" src={window.beholdLogo} />
        </section>
        <section className="session">
            <div className="session-all-inputs">
              {this.whichForm()}
              
            </div>
          {demoLogin}
        </section>
      </div>
    );
  }
}

export default withRouter(SessionForm);
