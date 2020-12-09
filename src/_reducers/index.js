import { combineReducers } from 'redux';
import character from './character_reducer';

const rootReducer = combineReducers({
    character,
});

export default rootReducer;