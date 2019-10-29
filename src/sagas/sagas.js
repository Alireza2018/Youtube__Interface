import { takeLatest, all } from "redux-saga/effects"

import * as types from '../actions/actionTypes'
import {fetchChannelVideosSaga} from './youtubeSaga'


/**                                                                     *
 *                                                                      *
 *              WATCHER FUNCTIONS                                       *
 *              --------------------------------------------------------*
 *                                                                      */

export function* youtubeSaga() {
    yield all([
        takeLatest(types.FETCH_CHANNEL_VIDEOS_START, fetchChannelVideosSaga)
    ])
}