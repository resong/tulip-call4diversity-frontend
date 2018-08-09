import { connect } from "react-redux";

import EventsList from "../components/EventsList";
import { getAllConferences } from "../actions/index";

const mapStateToProps = ({ conferences, loading, errors }) => ({
  conferences,
  isLoading: loading,
  hasErrors: errors
});

const mapDispatchToProps = dispatch => {
  return {
    getData: () => dispatch(getAllConferences)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsList);
