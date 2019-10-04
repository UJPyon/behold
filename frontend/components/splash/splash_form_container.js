import SplashForm from "./splash_form";
import { connect } from "react-redux";

const msp = state => {
  return {
    state,
  }
}

export default connect(msp)(SplashForm);