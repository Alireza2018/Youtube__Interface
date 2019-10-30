import { takeLatest, all } from "redux-saga/effects"

import * as types from '../actions/actionTypes'
import {fetchVideosSaga} from './youtubeSaga'


/**                                                                     *
 *                                                                      *
 *              WATCHER FUNCTIONS                                       *
 *              --------------------------------------------------------*
 *                                                                      */

export function* youtubeSaga() {
    yield all([
        takeLatest(types.FETCH_VIDEOS_START, fetchVideosSaga)
    ])
}