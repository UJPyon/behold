import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
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
      error7: "Email has already been taken.",
      loginNextStep: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
    this.handleEmailSubmit = this.handleEmailSubmit.bind(this);
    this.update = this.update.bind(this);
    this.inputBorderType = this.inputBorderType.bind(this);
    this.whichForm = this.whichForm.bind(this);
    this.errorLink = this.errorLink.bind(this);
    // this.changeUserLink = this.changeUserLink.bind(this);
    // this.showLink = this.showLink.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
    document.body.style.backgroundImage = "url('https://cache.desktopnexus.com/cropped-wallpapers/2353/2353798-1920x1080-[DesktopNexus.com].jpg?st=Gsec2x7-Z0xWWwPSdmvqkA&e=1570216831')";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
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

  errorDoesExist(errorMsg, additErrorMsg = null) {
    if (this.props.errors.includes(errorMsg)) {
      return errorMsg;
    } else if (this.props.errors.includes(additErrorMsg)) {
      return additErrorMsg;
    } else {
      return null;
    }
  }

  errorLink(errorMsg) {
    if (this.props.errors.includes(errorMsg)) {
      return <Link className="session-input-link-text" to="/signup">&nbsp;create a new account</Link>
    } else {
      return <div></div>
    }
  }

  inputBorderType(errorMsg, additErrorMsg = null) {
    if (this.props.errors.includes(errorMsg) || this.props.errors.includes(additErrorMsg)) {
      return "error-";
    } else {
      return "";
    }
  }

  // -------------------------------------------------------------------------------------------------------
  // ----- COME BACK TO THIS IN THE FUTURE: CREATING A LINK TO GO BACK AND SIGN IN AS DIFFERENT EMAIL ------
  // -------------------------------------------------------------------------------------------------------
  // changeUserLink() {
  //   if (this.state.loginNextStep) {
  //     this.setState({loginNextStep: false})
  //   }
  // }

  // showLink() {
  //   if (this.state.email && this.state.loginNextStep === true && !this.props.errors.includes("Check your email addess or ")) {
  //     return <Link 
  //       onClick={this.changeUserLink()} 
  //       className="session-input-link-text" 
  //       to="/login">Sign in with a different email address
  //     </Link>
  //   } else {
  //     return <div></div>
  //   }
  // }

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
          
          <form onSubmit={this.handleSubmit}>
            <div className="session-header">
              <h1>{this.props.formType}</h1>
              <div className="session-signup-login-link"><div>Already have an account?</div>&nbsp;<Link to="/login">Log in</Link></div>
            </div>
            <div className="session-all-inputs">
              <section>
                <label htmlFor="email">Email address</label>
                <input
                  className={this.inputBorderType(this.state.error1, this.state.error7) + "session-input"}
                  id="email"
                  type="email"
                  onChange={this.update("email")}
                />
                <p>{this.errorDoesExist(this.state.error1, this.state.error7)}</p>
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

    return (
      <>
        <section>
          <img className="session-logo" src={window.beholdLogo} />
        </section>
        <section className="session">
            <div className="session-all-inputs">
              {this.whichForm()}
              
            </div>
          {demoLogin}
        </section>
      </>
    );
  }
}

export default withRouter(SessionForm);