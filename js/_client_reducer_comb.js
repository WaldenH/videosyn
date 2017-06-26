import { combineReducers, createStore } from "redux";

// it can be a file A for user
// this function can only act on user data
const userReducer   = (state={}, action)=>{
  switch (action.type) {
    case "CHANGE_NAME":{
      // if return state directly
      // the state is the same
      // copy here, it can not syn
      state = {...state, name: action.value1};
      break;
    }
    case "CHANGE_AGE":{
      state = {...state,  age: "aaaa"};
      break;
    }
  };
  state = {...state,  age: "aaaa"};
  return state;
};

// it can be a file B for tweet
// this function can only act on tweet data
const tweetsReducer = (state=[], action)=>{
  return state;
};

// it can be a file C for combine
const reducers = combineReducers({
  /**
   * user: data in store
   * userReducer: function used to handle user
   */
  user  : userReducer,
  tweets: tweetsReducer,
});

/**
 * @param  {function defination} reducer function to accept action
*/
const store = createStore(reducers);

/**
  * @param  {[type]} ( [description]
 * @return {[type]}   [description]
 */
store.subscribe(()=>{
  console.log("store change", store.getState())
});

/**
 * give events to this store
 * @param  {[type]} {type:   "INC"         [description]
 * @param  {[type]} payload: 1}            [description]
 * @return {[type]}          [description]
 */
store.dispatch({type: "CHANGE_AGE" ,  value1:  1     })
store.dispatch({type: "CHANGE_NAME",  value1: "Mike"})
