import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout().then(() => this.props.history.push("/"));
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div>
          <h3>Salutations, {this.props.currentUser.fname}&nbsp;{this.props.currentUser.lname}!</h3>
          <button onClick={this.handleLogout}>Logout</button>
        </div>
      );
    } else {

      return (
        <div>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Login</Link>
        </div>
      );
    }
  }
}

export default withRouter(Navbar);