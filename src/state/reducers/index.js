import {combineReducers} from 'redux'
import { photoReducer } from './photoReducers'

export const rootReducer = combineReducers({
   photos:photoReducer
})