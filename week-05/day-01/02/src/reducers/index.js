import { combineReducers } from 'redux';

import numberReducer from './numberReducer';
import tagReducer from './tagReducer';

export default combineReducers({
    numberReducer,
    tagReducer
});
