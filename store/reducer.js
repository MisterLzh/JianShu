import { combineReducers } from "redux-immutable";
import { reducer as headerreducer } from '../app/header/store'
const reducer = combineReducers({
  header: headerreducer
})
export default reducer;