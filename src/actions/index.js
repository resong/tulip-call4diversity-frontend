import conferences from "../api/conferences.js";

/**
 * General file for Redux Action Creators
 */

// Constants
export const CONFERENCE_ACTIONS = {
  LOADING: "LOADING_CONFERENCES",
  LOAD_SUCCESS: "LOAD_SUCCESS_CONFERENCES"
};

// Action Creators
export const getAllConferences = dispatch => {
  dispatch(conferencesIsLoading(true));
  conferences.getAll().then(res => {
    dispatch(conferencesIsLoading(false));
    dispatch(getConferencesSuccess(res));
  });
};

const conferencesIsLoading = bool => ({
  type: CONFERENCE_ACTIONS.LOADING,
  payload: {
    isLoading: bool
  }
});

const getConferencesSuccess = conferences => ({
  type: CONFERENCE_ACTIONS.LOAD_SUCCESS,
  payload: {
    conferences
  }
});
