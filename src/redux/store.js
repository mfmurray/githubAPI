// Imports: Dependencies
import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';

// Imports: Reducer and Saga
import rootReducer from './reducers';
import rootSaga from './sagas'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: [
  ],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: [

  ],
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)
const sagaMiddleware = createSagaMiddleware();
// Redux: Store
const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(rootSaga)

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

// Exports
export {
  store,
  persistor,
};
