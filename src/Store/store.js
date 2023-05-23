import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { root } from './RootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({root});
// public thông tin của store
const enhacers = composeWithDevTools({});
export const store = configureStore({reducer,enhacers});