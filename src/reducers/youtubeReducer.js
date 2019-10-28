import initialState from '../store/initialState'
import * as types from '../actions/actionTypes'

export default function youtubeReducer(state = initialState.youtube, action) {
    switch(action.type) {
        case types.FETCH_ALL_CHANNELS_START: 
            return {
                ...state,
                fetchAllStarted: true
            }
        case types.FETCH_ALL_CHANNELS_SUCCESS:
            return {
                ...state,
                channels: action.data,
                fetchAllStarted: false,
                fetchAllSuccess: true
            }
        case types.FETCH_ALL_CHANNELS_ERROR: 
            return {
                ...state,
                fetchAllError: true
            }
        case types.FETCH_YOUTUBE_CHANNEL_INFO_START:
            return {
                ...state
            }
        case types.FETCH_YOUTUBE_CHANNEL_INFO_SUCCESS:
            console.log(action)
            return {
                ...state,
                videos: state.videos.concat({channelId: action.data.channelId, items: action.data.items}),
                fetchedChannels: state.fetchedChannels.concat(action.data.channelId)
            }
        case types.FETCH_YOUTUBE_CHANNEL_INFO_ERROR:
            return {
                ...state
            }
        default:
            return state
    }
}
