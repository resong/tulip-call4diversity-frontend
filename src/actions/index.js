import conferences from '../api/conferences';

/**
 * General file for Redux Action Creators
 */

// Constants
export const CONFERENCE_ACTIONS = {
  LOADING: 'LOADING_CONFERENCES',
  LOAD_SUCCESS: 'LOAD_SUCCESS_CONFERENCES',
  LOAD_FAILURE: 'LOAD_FAILURE_CONFERENCES',
  POST_SUCCESS: 'POST_SUCCESS',
  POST_FAILURE: 'POST_FAILURE',
  SEARCH: 'SEARCH_CONFERENCES'
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

// NEW COMPONENT VIEW STUFF
//Actions

export const COMMON_ACTIONS = {
  COMPONENT_SHOW: 'COMPONENT_SHOW',
  COMPONENT_HIDE: 'COMPONENT_HIDE',
  CONFERENCES_SHOW: 'CONFERENCES_SHOW',
  CONFERENCES_HIDE: 'CONFERENCES_HIDE',
  FORM_SHOW: 'FORM_SHOW',
  FORM_HIDE: 'FORM_HIDE',
  LOADING_SHOW: 'LOADING_SHOW',
  LOADING_HIDE: 'LOADING_HIDE'
};

//Action Creators
// Saving these two for future refactor
// const componentShow = (showX) => ({
//   type: COMMON_ACTIONS.COMPONENT_SHOW
// });

// const componentHide = (showX) => ({
//   type: COMMON_ACTIONS.COMPONENT_HIDE
// });

const conferencesShow = () => ({
  type: COMMON_ACTIONS.CONFERENCES_SHOW
});

// const conferencesHide = () => ({
//   type: COMMON_ACTIONS.CONFERENCES_HIDE
// });

// const formShow = () => ({
//   type: COMMON_ACTIONS.FORM_SHOW
// });

const formHide = () => ({
  type: COMMON_ACTIONS.FORM_HIDE
});

// const loadingShow = () => ({
//   type: COMMON_ACTIONS.LOADING_SHOW
// });

// const loadingHide = () => ({
//   type: COMMON_ACTIONS.LOADING_HIDE
// });

// OLD FORMAT
// export const componentShow = (showX, bool) => store.dispatch({ type: COMMON_ACTIONS.COMPONENT_SHOW, showX, bool});
// export const componentHide = (showX, bool) => store.dispatch({ type: COMMON_ACTIONS.COMPONENT_HIDE, showX, bool});

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
export const addNewConference = values => dispatch => {
  return conferences
  .postSubmissionForm(values)
  .then(res => {
    dispatch(addNewConferenceSuccess(res.data));
    // TODO: call get conference API call
    dispatch(formHide());
    dispatch(conferencesShow());  
  })
  .catch(err => {
    dispatch(addNewConferenceFailure());
  });
}

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
