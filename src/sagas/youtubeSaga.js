import { call, put, select } from "redux-saga/effects"
import * as actions from '../actions/youtubeActions'

import { fetchAllChannels, fetchChannelVideos, fetchChannelInfo } from './api/youtubeRequests'

export function* fetchAllChannelsSaga({channelIds}) {
    
    try {
        const data = yield call(fetchAllChannels, channelIds)
        if(!data) throw Error('Unable to load channels')
        yield put(actions.fetchAllChannelsSuccess(data))
    }
    catch(e) {
        yield put(actions.fetchAllChannelsError(e))
    }
}

export function* fetchChannelInfoSaga({channelId}) {
    try {
        const data = yield call(fetchChannelInfo, channelId)
        if(!data) throw Error('Unable to get channel information')
        yield put(actions.fetchChannelInfoSuccess(data))
    }
    catch(e) {
        console.log(e)
        yield put(actions.fetchChannelInfoError(e))
    }
}

export function* fetchChannelVideosSaga({channelId}) {
    try {
        const data = yield call(fetchChannelVideos, channelId)
        if(!data) throw Error('Unable to load videos')
        yield put(actions.fetchChannelVideosSuccess(data))
    }
    catch(e) {
        yield put(actions.fetchChannelVideosError(e))
    }
}
