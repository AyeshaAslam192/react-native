import Login from "../../services/shared/Login";
import { LOGIN_CREDENTIALS } from "./loginActionsTypes";

const loginUtils = new Login();

const setLoginCredentials = (city) => ({
    type: LOGIN_CREDENTIALS,
    payload: city,
});

const fetchLoginCredentials = (data) => (dispatch) => {
    console.log("calling")
    loginUtils.fetchLoginCredentials(data).then((credentials) => {
      dispatch(setLoginCredentials(credentials))
    }).catch((error) => {
        console.error(error);
    });
};

export {
    fetchLoginCredentials
}