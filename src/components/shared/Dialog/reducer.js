// import {
//     HIDE_DIALOG,
//     SHOW_DIALOG,
//   } from './actionTypes';
// import { dialog as initialState } from '../../initialReduxStates';

export default function dialog(state, action) {
  switch (action.type) {
    case "SHOW_DIALOG": {
      console.log('SHOW_DIALOG state', state)
      return {
        ...state,
        open: true,
        title: action.payload.title,
        bodyComponent: action.payload.bodyComponent
      };
    }
    case "HIDE_DIALOG": {
      console.log('HIDE_DIALOG state', state)
      return {
        ...state,
        open: false,
        title: null,
        bodyComponent: null,
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
