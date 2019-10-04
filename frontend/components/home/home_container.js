import { connect } from 'react-redux';
import Home from './home';

const msp = state => {
  return {
    something: "state",
  };
}

// const mdp = dispatch => {
//   debugger
//   return {
//     dispatch,
//   };
// }

export default connect(msp)(Home);