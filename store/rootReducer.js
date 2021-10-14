import { combineReducers } from 'redux';
import appReducer from './app/appReducer';
import themeReducer from './theme/themeReducer';
import { persistReducer } from 'redux-persist';
import { persistConfig } from './persistReducer';

const reducers = combineReducers({
    app: appReducer,
    theme: persistReducer(persistConfig, themeReducer),
});

export default reducers;