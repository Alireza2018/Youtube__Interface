import initialState from '../store/initialState'
import * as types from '../actions/actionTypes'

export default function youtubeReducer(state = initialState.youtube, action) {
    switch(action.type) {
        case types.FETCH_VIDEOS_START: 
            return {
                ...state,
                fetchStarted: true
            }
        case types.FETCH_VIDEOS_SUCCESS:
            return {
                ...state,
                videos: action.data,
                fetchSuccess: true
            }
        case types.FETCH_VIDEOS_ERROR:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

