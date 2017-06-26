import { applyMiddleware, createStore } from "redux";

// it can be a file A for user
// this function can only act on user data
const reducer   = (initialState=0, action)=>{
  if (action.type === "E") {
    throw new Error("Error Error")
  }
  return initialState;
};

// code of middleware
const error = (store)=>(next)=>(action)=>{
  try{
    next(action);
  } catch(e){
    console.log("error!!!!!", e);
  }
};

// error is a middleware function
const middleware = applyMiddleware(error);

const store = createStore(reducer, 1, middleware);

store.subscribe(()=>{
  console.log("store change>>>>>>", store.getState())
})


store.dispatch({type: "CHANGE_AGE" ,  value1:  1     })
store.dispatch({type: "CHANGE_NAME",  value1: "Mike"})
store.dispatch({type: "E"  })
