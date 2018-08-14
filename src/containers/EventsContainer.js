import { connect } from 'react-redux';

import EventsList from '../components/EventsList';
import { getAllConferences, filterConferences } from '../actions';

const mapStateToProps = ({ conferences, loading, errors, search }) => ({
  conferences,
  filteredConferences: conferences.filter(
    conference =>
      conference.name // check if the conference object has a name
        ? conference.name.toLowerCase().includes(search.toLowerCase())
        : false
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
