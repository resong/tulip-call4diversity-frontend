import { connect } from "react-redux";

import EventsList from "../components/EventsList";
import { getAllConferences, filterConferences } from "../actions";

const mapStateToProps = ({ conferences, loading, errors, search }) => ({
  conferences,
  filteredConferences: conferences.filter(conference =>
    conference.name.toLowerCase().includes(search.toLowerCase())
  ),
  isLoading: loading,
  hasErrors: errors,
  searchText: search
});

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getAllConferences),
  filterConferences: name => dispatch(filterConferences(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsList);
