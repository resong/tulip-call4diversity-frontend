

import { connect } from "react-redux";

import App from "../App";
import { COMMON_ACTIONS, addNewConference } from "../actions/index";

const mapDispatchToProps = dispatch => ({
  // Leaving this in here for potential future refactoring
  // componentShow: (showX) => dispatch(
  //   {
  //     type: COMMON_ACTIONS.COMPONENT_SHOW,
  //     payload: {
  //       showX
  //     }
  //   }
  // ),
  // componentHide: (showX) => dispatch(
  //   {
  //     type: COMMON_ACTIONS.COMPONENT_HIDE,
  //     payload: {
  //       showX
  //     }
  //   }
  // ),
  conferencesShow: () => dispatch({type: COMMON_ACTIONS.CONFERENCES_SHOW}),
  conferencesHide: () => dispatch({type: COMMON_ACTIONS.CONFERENCES_HIDE}),
  formShow: () => dispatch({type: COMMON_ACTIONS.FORM_SHOW}),
  formHide: () => dispatch({type: COMMON_ACTIONS.FORM_HIDE}),
  loadingShow: () => dispatch({type: COMMON_ACTIONS.LOADING_SHOW}),
  loadingHide: () => dispatch({type: COMMON_ACTIONS.LOADING_HIDE}),
  addNewConference: values => dispatch(addNewConference(values))
});


const mapStateToProps = (state) => {
  return {
    common: state.common
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
