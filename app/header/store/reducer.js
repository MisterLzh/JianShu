import * as actiontype from './actionType'
import { fromJS } from 'immutable'
const defaultsState = fromJS({
  focused: false,
  list: [],
  page: 1,
  totalpage: 0
});
export default (state = defaultsState, action) => {
  switch (action.type) {
    case actiontype.SEARCH_FOCUS:
      return state.set('focused', true)
    case actiontype.SEARCH_BLUR:
      return state.set('focused', false)
    case actiontype.CHANGE_LIST:
      return state.set('list', action.data).set('totalpage', action.totalpage)
    default:
      return state;
  }
}