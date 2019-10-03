import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import LoginPasswordForm from './session_forms/login_password_form';
import LoginEmailForm from './session_forms/login_email_form';
import SignUpForm from './session_forms/signup_form';

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
      error5: "temp",
      emailError: "",
      loginStep1: true,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
    this.update = this.update.bind(this);
    this.inputBorderType = this.inputBorderType.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.history.push('/'));
  }


  // ========================================================================
  // =========================== TESTING CODE ===============================
  // ========================================================================
  handleEmailSubmit(e) {
    e.preventDefault();
    this.props.userExists(this.state.email).then(response => {
      if (response === this.state.email) {
        this.setState({loginStep1: false});
      } else {
        this.state.emailError = response;
      }
    });
  }
  
  // ========================================================================
  // =========================== END TEST CODE ==============================
  // ========================================================================
  
  handleDemoLogin() {
    const demoUser = { email: "ujpyon@gmail.com", password: "go_project_go" };
    this.props.demoLogin(demoUser);
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

  inputBorderType(errorMsg, additErrorMsg = null) {
    if (this.props.errors.includes(errorMsg) || this.props.errors.includes(additErrorMsg)) {
      return "error-";
    } else {
      return "";
    }
  }

  render() {

    // --Splash page Sign In/Sign Up text--
    const title = this.props.formType === "Sign in" ? "Sign Up" : "Log In";
    const path = this.props.formType === "Sign in" ? "/signup" : "/login";
    const text = this.props.formType === "Sign in" ? "New user?" : "Already have an account?";
    let buttonText;
    if (this.props.formType === "Sign in") {
      if (this.loginStep1) {
        buttonText = "Continue";
      } else {
        buttonText = "Log In";
      }
    } else {
      buttonText = "Create account";
    }

    // --Display additional "first name" and "last name" inputs for creating a new account--
    // let additionalFields = <div></div>;
    // if (this.props.formType !== "Sign in") {
    //   additionalFields = (
    //     <div className="session-input-name">
    //       <section>
    //         <label>First name</label>
    //         <input
    //           className={this.inputBorderType(this.state.error3) + "session-input-additional"}
    //           id="fname" type="text"
    //           onChange={this.update("fname")}
    //         />
    //         <p>{this.errorDoesExist(this.state.error3)}</p>
    //       </section>
    //       <section>
    //         <label>Last name</label>
    //         <input
    //           className={this.inputBorderType(this.state.error4) + "session-input-additional"}
    //           id="lname"
    //           type="text"
    //           onChange={this.update("lname")}
    //         />
    //         <p>{this.errorDoesExist(this.state.error4)}</p>
    //       </section>
    //     </div>
    //   );
    // }

    // --Demo Login Button--
    const demoLogin = (
      <div className="session-demo">
        <span className="session-line">&nbsp;Or&nbsp;</span>
        <br /><br />
        <button onClick={this.handleDemoLogin}>Demo Login</button>
      </div>
    );



  // ========================================================================
  // vvvvvvvvvvvvvvvvvvvvvvvvvvv TESTING CODE vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
  // ========================================================================
  // const signInEmail = (
  //   <form 
  //     className="session-all-inputs" 
  //     onSubmit={this.handleEmailSubmit}
  //   >

  //     <label htmlFor="email">Email address</label>
  //     <input
  //       className={this.inputBorderType(this.state.error1) + "session-input"}
  //       id="email"
  //       type="email"
  //       onChange={this.update("email")}
  //     />
  //     <p>{this.errorDoesExist(this.state.emailError)}</p>

  //     <input
  //       className="session-submit-button"
  //       type="submit"
  //       value={buttonText}
  //     />
  //   </form>
  // )

  // const signInPassword = (
  //   <form 
  //     className="session-all-inputs" 
  //     onSubmit={this.handleSubmit}
  //   >
  //     <label htmlFor="pw">Password</label>
  //     <input
  //       className={this.inputBorderType(this.state.error2, this.state.error5) + "session-input"}
  //       id="pw"
  //       type="password"
  //       onChange={this.update("password")}
  //     />
  //     <p>{this.errorDoesExist(this.state.error5)}</p>

  //     <input
  //       className="session-submit-button"
  //       type="submit"
  //       value={buttonText}
  //     />
  //   </form>
  // )

  let renderForm;
  if (this.props.formType !== "Sign in") {
    debugger
    renderForm = (
      <SignUpForm
        inputBorderType={this.inputBorderType}
        errorDoesExist={this.errorDoesExist}
        update={this.update}
        errors={this.props.errors}
        handleEmailSubmit={this.handleSubmit}
        buttonText={this.buttonText}
        error1={this.state.error1}
        error2={this.state.error2}
        error3={this.state.error3}
        error4={this.state.error4}
      />
    )
  } else {
    if (this.loginStep1) {
      debugger
      renderForm = (
        <LoginEmailForm
          inputBorderType={this.inputBorderType}
          errorDoesExist={this.errorDoesExist}
          emailError={this.state.emailError}
          errors={this.props.errors}
          handleEmailSubmit={this.handleSubmit}
          buttonText={this.buttonText}
        />
      );
    } else {
      debugger
      renderForm = (
        <LoginPasswordForm
          inputBorderType={this.inputBorderType}
          errorDoesExist={this.errorDoesExist}
          emailError={this.state.emailError}
          errors={this.props.errors}
          handleEmailSubmit={this.handleSubmit}
          buttonText={this.buttonText}
        />
      );
    }
  }

  // ========================================================================
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^ END TEST CODE ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  // ========================================================================


    // --Signup/Login page session form--
    return (
      <>
        <section>
          <img className="session-logo" src="https://behold-aa.s3.us-east-2.amazonaws.com/behold_logo.png" />
          {/* <img className="session-background" src="https://behold-aa.s3.us-east-2.amazonaws.com/signup_login_background.jpg"/> */}
        </section>

        <section className="session">
          {renderForm}
          {demoLogin}
        </section>
      </>
    );
  }
}

export default withRouter(SessionForm);