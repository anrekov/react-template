import { createStore, applyMiddleware, UnknownAction } from 'redux';
import { ThunkAction, thunk } from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

export const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
export type ThunkActionApp = ThunkAction<void, RootState, unknown, UnknownAction>;
