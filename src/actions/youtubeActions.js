import * as types from './actionTypes'

/**
 *
 *      NETWORK ACTIONS
 *
 */
export const fetchVideosStart = channelIds => ({
    type: types.FETCH_VIDEOS_START,
    channelIds
})

export const fetchVideosSuccess = data => ({
    type: types.FETCH_VIDEOS_SUCCESS,
    data
})

export const fetchVideosError = error => ({
    type: types.FETCH_VIDEOS_ERROR,
    error
})
