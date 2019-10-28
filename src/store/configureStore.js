import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware  from 'redux-saga'
import rootReducer from '../reducers/rootReducer'
import { initSagas } from '../sagas'


const sagaMiddleware = createSagaMiddleware()

export default function configureStore() {
    const store = createStore(
        rootReducer, composeWithDevTools(
            applyMiddleware(sagaMiddleware)
        ));

    initSagas(sagaMiddleware)

    return store;
}
