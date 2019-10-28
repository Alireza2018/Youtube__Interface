import { takeLatest, all } from "redux-saga/effects"

import * as types from '../actions/actionTypes'
import {fetchAllChannelsSaga, fetchChannelVideosSaga, fetchChannelInfoSaga} from './youtubeSaga'


/**                                                                     *
 *                                                                      *
 *              WATCHER FUNCTIONS                                       *
 *              --------------------------------------------------------*
 *                                                                      */

export function* youtubeSaga() {
    yield all([
        takeLatest(types.FETCH_ALL_CHANNELS_START, fetchAllChannelsSaga),
        takeLatest(types.FETCH_CHANNEL_VIDEOS_START, fetchChannelVideosSaga),
        takeLatest(types.FETCH_YOUTUBE_CHANNEL_INFO_START, fetchChannelInfoSaga)
    ])
}