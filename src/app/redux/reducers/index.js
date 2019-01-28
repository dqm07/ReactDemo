import { combineReducers } from 'redux'
import add from './add'
import list from './list'

export default combineReducers({
  add,
  list
})