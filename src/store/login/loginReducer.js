import { LOGIN_CREDENTIALS, VERIFY_TOKEN } from "./loginActionsTypes";
  
  const initialState = {
    LoginCredentials: '',
    tokenVerfied: false,
  };
  
  const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_CREDENTIALS: {
        return {
          ...state,
          LoginCredentials: action.payload,
        };
      }
      case VERIFY_TOKEN: {
        return {
          ...state,
          tokenVerfied: action.payload,
        };
      }
      default: {
        return state;
      }
    }
  };
  
  export default LoginReducer;