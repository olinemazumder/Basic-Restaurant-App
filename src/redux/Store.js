import {createStore} from "redux";
import {Reducer} from './Reducer'
import {applyMiddleware} from "redux";
import logger from "redux-logger"


const myStore = createStore(Reducer,applyMiddleware(logger))

export default myStore