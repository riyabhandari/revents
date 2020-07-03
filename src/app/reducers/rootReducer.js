import eventReducer from "../../features/event/eventReducer";
import {reducer as FormReducer} from 'redux-form';
const { combineReducers } = require("redux");
const { default: testReducer } = require("../../features/testarea/testReducer");

const rootReducer=combineReducers({
    form:FormReducer,
    test:testReducer,
    events:eventReducer
})

export default rootReducer