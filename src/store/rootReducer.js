import { combineReducers } from 'redux';
import appReducer from './app/appReducer';
import themeReducer from './theme/themeReducer';
import { persistReducer } from 'redux-persist';
import { persistConfig } from './persistReducer';
import LoginReducer from './login/loginReducer';

const reducers = combineReducers({
    app: appReducer,
    login: persistReducer(persistConfig, LoginReducer),
    theme: persistReducer(persistConfig, themeReducer),
});

export default reducers;