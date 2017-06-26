import React              from "react"
import ReactDom           from "react-dom"
import {
  Router,
  Route,
  IndexRoute,
  hashHistory }           from "react-router";

import { Provider }       from "react-redux"

import store              from "./stores/store"

import PHome              from "./pages/PHome"
import PRoom              from "./pages/PRoom"
import PVideoRooms        from "./pages/PVideoRooms"
import PChannel           from "./pages/PChannel"
import PChannelsControler from "./pages/PChannelsControler"
import PVideosControler   from "./pages/PVideosControler"
import PRegister          from "./pages/PRegister"
import PRoomsControl      from "./pages/PRoomsControl"

const app = document.getElementById( 'app' );
ReactDom.render(
  <Provider store = {store} >
    <Router history={hashHistory}>
      <Route path="/"           component={PHome}             />
      <Route path="video"       component={PVideoRooms}       />
      <Route path="room"        component={PRoom}             />
      <Route path="channel"     component={PChannel}          />
      <Route path="add_channel" component={PChannelsControler}/>
      <Route path="add_video"   component={PVideosControler}  />
      <Route path="register"    component={PRegister}         />
      <Route path="add_room"    component={PRoomsControl}    />
    </Router>
  </Provider>
  , app );
