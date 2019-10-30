import { call, put, select } from "redux-saga/effects"
import * as actions from '../actions/youtubeActions'

import { fetchVideos } from './api/youtubeRequests'

export function* fetchVideosSaga({channelIds}) {
    try {
        const data = yield call(fetchVideos, channelIds)
        if(!data) throw Error('Unable to load videos')
        yield put(actions.fetchVideosSuccess(data))
    }
    catch(e) {
        console.log(e)
        yield put(actions.fetchVideosError(e))
    }
}
