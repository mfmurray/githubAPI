// Imports: Dependencies
import { combineReducers } from 'redux';


import commitsReducer from './commitsReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  commitsReducer: commitsReducer
});

// Exports
export default rootReducer;
