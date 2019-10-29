import initialState from '../store/initialState'
import * as types from '../actions/actionTypes'

export default function youtubeReducer(state = initialState.youtube, action) {
    switch(action.type) {
        case types.FETCH_CHANNEL_VIDEOS_START: 
            return {
                ...state,
                fetchStarted: true
            }
        case types.FETCH_CHANNEL_VIDEOS_SUCCESS:
            return {
                ...state,
                selectedChannels: state.selectedChannels.concat(action.data),
                fetchedChannels: state.fetchedChannels.concat(action.data.channelId)
            }
        case types.FETCH_CHANNEL_VIDEOS_ERROR:
            return {
                ...state,
                error: action.error
            }
        //LOCAL STATE
        case types.CHANNEL_IS_DESELECTED:
            return {
                ...state,
                removedChannels: action.channel
            }
        case types.CHANNEL_IS_RESELECTED: 
            return {
                ...state,
                selectedChannels: state.selectedChannels.concat(action.data)
            }
        default:
            return state
    }
}
