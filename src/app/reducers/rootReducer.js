import eventReducer from "../../features/event/eventReducer";
const { combineReducers } = require("redux");
const { default: testReducer } = require("../../features/testarea/testReducer");

const rootReducer=combineReducers({
    test:testReducer,
    events:eventReducer
})

export default rootReducer