import { CONFERENCE_ACTIONS } from "../actions";

export const conferences = (state = [], action) =>
  action.type === CONFERENCE_ACTIONS.LOAD_SUCCESS
    ? action.payload.conferences
    : state;
