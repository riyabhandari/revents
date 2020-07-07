import eventReducer from "../../features/event/eventReducer";
import {reducer as FormReducer} from 'redux-form';
import {reducer as ToastrReducer} from 'react-redux-toastr';
import modalReducer from "../../features/modal/modalReducer";
import authReducer from "../../features/auth/authReducer";
import asyncReducer from "../../features/async/asyncReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
const { combineReducers } = require("redux");
const { default: testReducer } = require("../../features/testarea/testReducer");

const rootReducer=combineReducers({
    form:FormReducer,
    test:testReducer,
    events:eventReducer,
    modals:modalReducer,
    auth:authReducer,
    async:asyncReducer,
    toastr:ToastrReducer,
    firebase:firebaseReducer,
    firestore:firestoreReducer
})

export default rootReducer