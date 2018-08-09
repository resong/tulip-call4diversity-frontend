import conferences from "../api/conferences";

/**
 * General file for Redux Action Creators
 */

// Constants
export const CONFERENCE_ACTIONS = {
  LOADING: "LOADING_CONFERENCES",
  LOAD_SUCCESS: "LOAD_SUCCESS_CONFERENCES",
  LOAD_FAILURE: "LOAD_FAILURE_CONFERENCES"
};

// Action Creators
export const getAllConferences = dispatch => {
  dispatch(conferencesIsLoading());
  conferences.getAll()
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
