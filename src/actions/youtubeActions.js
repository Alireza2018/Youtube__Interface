import * as types from './actionTypes'

/**
 *
 *      NETWORK RELATED ACTIONS
 *
 */

export const fetchChannelInfoStart = channelId => ({
    type : types.FETCH_YOUTUBE_CHANNEL_INFO_START,
    channelId: channelId
})


export const fetchChannelInfoSuccess = (data) => ({
    type: types.FETCH_YOUTUBE_CHANNEL_INFO_SUCCESS,
    data
})

export const fetchChannelInfoError = (error) => ({
    type: types.FETCH_YOUTUBE_CHANNEL_INFO_ERROR,
    error
})

export const fetchAllChannelsStart = channelIds => ({
    type: types.FETCH_ALL_CHANNELS_START,
    channelIds
})

export const fetchAllChannelsSuccess = data => ({
    type: types.FETCH_ALL_CHANNELS_SUCCESS,
    data
})

export const fetchAllChannelsError = error => ({
    type: types.FETCH_ALL_CHANNELS_ERROR,
    error
})

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