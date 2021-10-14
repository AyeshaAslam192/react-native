import { theme } from "./themeActionsTypes";
  
  const initialState = {
    themeShade: 'light',
  };
  
  const themeReducer = (state = initialState, action) => {
    switch (action.type) {
      case theme: {
        return {
          ...state,
          themeShade: action.payload,
        };
      }
      default: {
        return state;
      }
    }
  };
  
  export default themeReducer;