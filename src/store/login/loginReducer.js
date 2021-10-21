import { LOGIN_CREDENTIALS } from "./loginActionsTypes";
  
  const initialState = {
    LoginCredentials: '',
  };
  
  const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_CREDENTIALS: {
        return {
          ...state,
          LoginCredentials: action.payload,
        };
      }
      default: {
        return state;
      }
    }
  };
  
  export default LoginReducer;