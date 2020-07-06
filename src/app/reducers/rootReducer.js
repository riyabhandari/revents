import eventReducer from "../../features/event/eventReducer";
import {reducer as FormReducer} from 'redux-form';
import modalReducer from "../../features/modal/modalReducer";
import authReducer from "../../features/auth/authReducer";
import asyncReducer from "../../features/async/asyncReducer";
const { combineReducers } = require("redux");
const { default: testReducer } = require("../../features/testarea/testReducer");

const rootReducer=combineReducers({
    form:FormReducer,
    test:testReducer,
    events:eventReducer,
    modals:modalReducer,
    auth:authReducer,
    async:asyncReducer
})

export default rootReducer