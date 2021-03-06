import { combineReducers } from 'redux';
import { userReducer } from './signin';
import { rulesReducer } from './rules';
import { newsReducer } from './news';
import { articleReducer } from './article';
import { stuffReducer } from './stuff';
import { photographsReducer } from './photographs';
import { photographReducer } from './photograph';
import { makeupsReducer } from './makeups';
import { makeupReducer } from './makeup';

export const rootReducer = combineReducers({
    user: userReducer,
    rules: rulesReducer,
    news: newsReducer,
    article: articleReducer,
    stuff: stuffReducer,
    photographs: photographsReducer,
    photograph: photographReducer,
    makeups: makeupsReducer,
    makeup: makeupReducer,
})