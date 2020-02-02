import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';

const devTools = composeWithDevTools(applyMiddleware(logger))
const store = createStore(rootReducer, devTools)

export default store