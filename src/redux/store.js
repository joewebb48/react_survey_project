// import { createStore } from 'redux';
// import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import reducer from './reducer';

// let persistConfig = {
//   key: 'root',
//   storage
// };

// const persistedReducer = persistReducer(persistConfig, reducer);

// export default () => {
//   let store = createStore(
//     persistReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );
//   let persistor = persistStore(store);
//   return { store, persistor };
// };

// export const store = createStore(
//   persistedReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// export const persistor = persistStore(store);
import { createStore } from 'redux';

import reducer from './reducer';

export default createStore(reducer);
