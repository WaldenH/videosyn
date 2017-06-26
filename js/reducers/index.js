import { combineReducers  } from "redux"
import videos               from "./videosReducer"
import channels             from "./channelsReducer"
import rooms                from "./roomsReducer"
import users                from "./usersReducer"
import room                 from "./roomReducer"

// import { firebaseStateReducer as firebase } from 'react-redux-firebase'

export default combineReducers({
  videos,
  channels,
  rooms,
  users,
  room,
  // Add Firebase to reducers
  // firebase
})
