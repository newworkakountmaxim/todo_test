import {combineReducers} from "redux";

import modifyTasksReducer from './modifyTasksReducer';
import filterTasksReducer from './filterTasksReducer';

export default combineReducers({
    modifyTasksReducer,
    filterTasksReducer
})