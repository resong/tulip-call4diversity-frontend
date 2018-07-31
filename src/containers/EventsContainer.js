import { connect } from "react-redux";

import EventsList from "../components/EventsList";
import { getAllConferences } from "../actions/index";

const mapStateToProps = ({ conferences, isLoading }) => ({
  conferences,
  isLoading
});

const mapDispatchToProps = dispatch => {
  return {
    getData: () => dispatch(getAllConferences)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsList);
