import { COMMON_ACTIONS } from "../actions";

// This is an object that can carry the show/hide state of all of our components
const COMPONENT_VIEW_INITAL_STATE = {
  displayConferences: true,
  displayForm: false,
  displayLoading: false,
}

// The idea behind this is that the reducer accepts a component and triggers the specified show/hide action on that component
// export const common = (state = COMPONENT_VIEW_INITAL_STATE, action) => {
//   switch (action.type) {
//     case COMMON_ACTIONS.SHOW:
//     return {
//       ...state,
//       [action.showX]: true
//     };
//     case COMMON_ACTIONS.HIDE:
//       return {
//         ...state,
//         [action.showX]: false
//       };
//     default:
//       return {
//         ...state
//       };
//   }
// };



export const common = (state = COMPONENT_VIEW_INITAL_STATE, action) => {
  switch (action.type) {
    case COMMON_ACTIONS.CONFERENCES_SHOW:
    return {
      ...state,
      displayConferences: true
    };
    case COMMON_ACTIONS.CONFERENCES_HIDE:
      return {
        ...state,
        displayConferences: false
      };
    case COMMON_ACTIONS.FORM_SHOW:
    return {
      ...state,
      displayForm: true
    };
    case COMMON_ACTIONS.FORM_HIDE:
      return {
        ...state,
        displayForm: false
      };
    case COMMON_ACTIONS.LOADING_SHOW:
    return {
      ...state,
      displayLoading: true
    };
    case COMMON_ACTIONS.LOADING_HIDE:
      return {
        ...state,
        displayLoading: false
      };  
    default:
      return {
        ...state
      };
  }
};