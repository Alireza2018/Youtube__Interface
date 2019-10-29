import * as types from './actionTypes'

/**
 *
 *      NETWORK ACTIONS
 *
 */
export const fetchChannelVideosStart = channelId => ({
    type: types.FETCH_CHANNEL_VIDEOS_START,
    channelId
})

export const fetchChannelVideosSuccess = data => ({
    type: types.FETCH_CHANNEL_VIDEOS_SUCCESS,
    data
})

export const fetchChannelVideosError = error => ({
    type: types.FETCH_CHANNEL_VIDEOS_ERROR,
    error
})

/**
 *
 *      LOCAL ACTIONS
 *
 */
export const deselectChannel = channel => ({
    type: types.CHANNEL_IS_DESELECTED,
    channel
})

export const reselectChannel = data => ({
    type: types.CHANNEL_IS_RESELECTED,
    data
})