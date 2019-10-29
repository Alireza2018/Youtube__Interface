import { call, put, select } from "redux-saga/effects"
import * as actions from '../actions/youtubeActions'

import { fetchChannelVideos } from './api/youtubeRequests'

export function* fetchChannelVideosSaga({channelId}) {
    try {
        const data = yield call(fetchChannelVideos, channelId)
        if(!data) throw Error('Unable to load videos')
        yield put(actions.fetchChannelVideosSuccess(data))
    }
    catch(e) {
        console.log(e)
        yield put(actions.fetchChannelVideosError(e))
    }
}
