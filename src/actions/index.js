import conferences from "../api/conferences";

/**
 * General file for Redux Action Creators
 */

// Constants
export const CONFERENCE_ACTIONS = {
  LOADING: "LOADING_CONFERENCES",
  LOAD_SUCCESS: "LOAD_SUCCESS_CONFERENCES",
  LOAD_FAILURE: "LOAD_FAILURE_CONFERENCES",
  POST_SUCCESS: "POST_SUCCESS",
  POST_FAILURE: "POST_FAILURE",
  SEARCH: "SEARCH_CONFERENCES"
};

// Action Creators

// -- GET ALL CONFERENCES
export const getAllConferences = dispatch => {
  dispatch(conferencesIsLoading());
  conferences
    .getAll()
    .then(res => {
      dispatch(getConferencesSuccess(res.data));
    })
    .catch(err => {
      dispatch(getConferencesFailure());
    });
};

const conferencesIsLoading = () => ({
  type: CONFERENCE_ACTIONS.LOADING
});

const getConferencesSuccess = conferences => ({
  type: CONFERENCE_ACTIONS.LOAD_SUCCESS,
  payload: {
    conferences
  }
});

const getConferencesFailure = () => ({
  type: CONFERENCE_ACTIONS.LOAD_FAILURE
});

// -----------------------------

// -- SUBMIT/POST A CONFERENCE (W.I.P.)
const addNewConferenceSuccess = payload => ({
  type: CONFERENCE_ACTIONS.POST_SUCCESS,
  payload
});

const addNewConferenceFailure = () => ({
  type: CONFERENCE_ACTIONS.POST_FAILURE
});

// TODO: use this thunk in SubmissionForm
export const addNewConference = values => dispatch =>
  conferences
    .postSubmissionForm(values)
    .then(res => {
      dispatch(addNewConferenceSuccess(res.data));
      // TODO: call get conference API call
    })
    .catch(err => {
      dispatch(addNewConferenceFailure());
    });
// -----------------------------

// -- SEARCH FOR CONFERENCE BY NAME
export const filterConferences = value => dispatch => {
  dispatch(searchConferencesByName(value));
};

const searchConferencesByName = searchText => ({
  type: CONFERENCE_ACTIONS.SEARCH,
  payload: {
    searchText
  }
});
// -----------------------------
