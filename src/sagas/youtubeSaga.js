import { call, put, select } from "redux-saga/effects"
import * as actions from '../actions/youtubeActions' //All the redux actions are defined in this file

import { fetchVideos } from './api/youtubeRequests' //Import the function that executes the api call

//This function receives the list of channel ids
//Calls the api call and based on the result, will dispatch a success or error action
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
