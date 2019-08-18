import * as actiontype from './actionType'
import { fromJS } from 'immutable'
import axios from 'axios'
export const searchFocus = () => ({
  type: actiontype.SEARCH_FOCUS
})
export const searchBlur = () => ({
  type: actiontype.SEARCH_BLUR
})
const changelist = (data) => ({
  type: actiontype.CHANGE_LIST,
  data: fromJS(data),
  totalpage: Math.ceil(data.length / 10)
})
export const getList = () => {
  return (dispatch) => {
    axios.get('../../../api/headerList.json').then((res) => {
      const data = res.data
      dispatch(changelist(data.data))
    }).catch(() => {
      console.log('error');
    })
  }
}