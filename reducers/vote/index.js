import { ADD_VOTE, REMOVE_VOTE } from '../../constants/voteActions'

export const initialState = {
  albumVotes: {},
  votesCount: 0
}

const MAX_VOTES = process.env.NEXT_PUBLIC_MAX_VOTES

const reducer = {}
reducer[ADD_VOTE] = (state, { idSong, albumSlug }) => {
  const { albumVotes, votesCount } = state
  const votesArray = albumVotes[albumSlug] || []
  if (votesCount < MAX_VOTES) {
    return {
      ...state,
      albumVotes: {
        ...albumVotes,
        [albumSlug]: [...votesArray, idSong]
      },
      votesCount: votesCount + 1
    }
  }
  return state
}

reducer[REMOVE_VOTE] = (state, { idSong, albumSlug }) => {
  const { albumVotes, votesCount } = state
  const votesArray = albumVotes[albumSlug] || []
  if (votesCount > 0) {
    return {
      ...state,
      albumVotes: {
        ...albumVotes,
        [albumSlug]: votesArray.filter(val => val !== idSong)
      },
      votesCount: votesCount - 1
    }
  }
  return state
}

export default function voteReducer (state, action) {
  return reducer[action.type] ? reducer[action.type](state, action.payload) : state
}
