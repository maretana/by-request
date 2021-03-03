import { SET_HEADER_TEXT } from '../../constants/layoutActions'

export const initialState = {
  headerText: ''
}

const reducer = {}

reducer[SET_HEADER_TEXT] = (state, { headerText }) => {
  return {
    ...state,
    headerText
  }
}

export default function voteReducer (state, action) {
  return reducer[action.type] ? reducer[action.type](state, action.payload) : state
}
