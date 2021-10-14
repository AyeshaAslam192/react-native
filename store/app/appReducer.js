import { TOGGLE_MENU } from './appActionsTypes';
  
  const initialState = {
    isMenuVisible: false,
  };
  
  const appReducer = (state = initialState, action) => {
    switch (action.type) {
      case TOGGLE_MENU: {
        return {
          ...state,
          isMenuVisible: action.payload,
        };
      }
      default: {
        return state;
      }
    }
  };
  
  export default appReducer;