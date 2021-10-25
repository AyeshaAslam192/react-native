import Login from "../../services/shared/Login";
import { LOGIN_CREDENTIALS, VERIFY_TOKEN } from "./loginActionsTypes";

const loginUtils = new Login();

const setLoginCredentials = (city) => ({
    type: LOGIN_CREDENTIALS,
    payload: city,
});

const setTokenVerified = (city) => ({
    type: VERIFY_TOKEN,
    payload: city,
});

const fetchLoginCredentials = (data) => (dispatch) => {
    loginUtils.fetchLoginCredentials(data).then((credentials) => {
      dispatch(setLoginCredentials(credentials.token))
    }).catch((error) => {
        console.error(error);
    });
};

const isVerified = (data, callback) => (dispatch) => {
    loginUtils.verifyToken(data).then((credentials) => {
        dispatch(setTokenVerified(credentials))
        if(callback) callback(false);
    }).catch((error) => {
        console.error(error);
    });
};

export {
    fetchLoginCredentials,
    isVerified
}