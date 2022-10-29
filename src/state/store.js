import {applyMiddleware, combineReducers, legacy_createStore}  from "redux"
import thunk from  "redux-thunk"
import { appReducer } from "./appReducer"

const rootReducer=combineReducers({
    app:appReducer
})



export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))