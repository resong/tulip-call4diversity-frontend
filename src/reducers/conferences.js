import { CONFERENCE_ACTIONS } from "../actions";

export const conferences = (state = [], action) =>
  action.type === CONFERENCE_ACTIONS.LOAD_SUCCESS
    ? action.payload.conferences
    : state;

export const search = (state = "", action) =>
  action.type === CONFERENCE_ACTIONS.SEARCH ? action.payload.searchText : state;
