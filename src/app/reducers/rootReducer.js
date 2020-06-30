const { combineReducers } = require("redux");
const { default: testReducer } = require("../../features/testarea/testReducer");

const rootReducer=combineReducers({
    test:testReducer
})

export default rootReducer