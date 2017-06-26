import {
          applyMiddleware,
          combineReducers,
          createStore,
          compose
        }                                         from "redux"

import { persistStore   , autoRehydrate }         from 'redux-persist'
import   crosstabSync                             from 'redux-persist-crosstab'
// import {  reactReduxFirebase  }                   from 'react-redux-firebase'

import logger   from "redux-logger"
import thunk    from "redux-thunk"
import promise  from "redux-promise-middleware"
import reducer  from "../reducers"

// Firebase config
const config = {
  apiKey: "AIzaSyDsk6c1NnuzZdCREyF2kh-b_d4jSo97-VQ",
  authDomain: "videosynclient.firebaseapp.com",
  databaseURL: "https://videosynclient.firebaseio.com",
  projectId: "videosynclient",
  storageBucket: "videosynclient.appspot.com",
  messagingSenderId: "712917821128"
}

const store = createStore(
  reducer,
  compose(
    // Add redux Firebase to compose
    // reactReduxFirebase(config, {
    //   userProfile: 'users'
    // }),
    applyMiddleware(
      promise(),
      thunk,
      logger(),
    ),
    autoRehydrate(),
  ));

// initial store when refresh tab
// persistStore(store).purge();

// keep store even though refresh tab
const persistor = persistStore(store,{});

// update tab when any change
crosstabSync(persistor);

export default store;
