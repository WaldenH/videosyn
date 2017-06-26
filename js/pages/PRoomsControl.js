import React, { Component, PropTypes } from 'react'
import { connect  }   from 'react-redux'
import { autobind }   from 'core-decorators';

import Header         from "../components/Header.js";

import { firebase as fireconfig } from "../config.js"
import * as firebase from 'firebase';

@autobind
export default class PRoomsControl extends React.Component {
  constructor(){
    super();
    this.state = {
      dbRef     : '',
      auth      : '',
      rooms     : '',
      roomsList : '',
      videos    : '',
      videosList: '',
      roomsRefObject : '',
      videosRefObject : '',
    }
  };

  addUser(){
    const { email } = this.refs;
    const { password } = this.refs;
    this.state.auth.createUserWithEmailAndPassword(email.value, password.value);
  }

  addRoom(){
    const { video }     = this.refs;
    const { length }    = this.refs;
    const { timestmp }  = this.refs;

    this.state.roomsRefObject.push({
      video:    video.value,
      length:   length.value,
      timestmp: timestmp.value });
      video.value     = '';
      length.value    = '';
      timestmp.value  = '';
  }

  addVideo(){
    const { video }     = this.refs;
    const { length }    = this.refs;
    const { category }  = this.refs;

    this.state.videosRefObject.push({
      video:    video.value,
      category: category.value,
      length:   length.value });
      video.value     = '';
      category.value  = '';
      length.value    = '';
  }

  componentDidMount(){
    firebase.initializeApp(fireconfig);
    var ldbRef = firebase.database().ref().child('text');
    this.setState({ dbRef: ldbRef});
    this.setState({auth: firebase.auth()});

    const roomsRefObject  = firebase.database().ref().child('rooms');
    const videosRefObject = firebase.database().ref().child('videos');

    this.setState({
      roomsRefObject  : roomsRefObject,
      videosRefObject : videosRefObject,
    });

    roomsRefObject.orderByChild('video').equalTo('video3').on('value', snap =>
    {
      this.setState({
        rooms: snap.val(),
      });

      var { rooms } = this.state;

      const roomsList =  Object.keys(rooms).map(
        (key, id) => {
          return <div key={key}>
            <li>video name:   {rooms[key].video}</li>
            length:       {rooms[key].length}<br/>
            current time: {rooms[key].timestmp}<br/>
          </div>;
        });
        this.setState({
          roomsList: roomsList,
        });
    });

    videosRefObject.orderByChild('video').on('value', snap =>
    {
      this.setState({
        videos: snap.val()
      });

      var { videos } = this.state;
      const videosList =  Object.keys(videos).map(
        (key, id) => {
          return <div key={key}>
            <li>video name:   {videos[key].video}</li>
            category:     {videos[key].category}<br/>
            length:       {videos[key].length}<br/>
          </div>;
        });
        this.setState({
          videosList: videosList,
        });
    });

  }

  render(){
    return (
      <div>
        <Header></Header>
        <br/>
        <h3>Videos: </h3>
        <div> { this.state.videosList } </div>
        <h3>Rooms: </h3>
        <div> { this.state.roomsList } </div>
        <br/><br/>

        <div id='Add Room/Video'>
          <h4>Add Room</h4>
          <div>
            Video name    :<br/>
            <input type="text" ref="video" />
          </div>
          <div>
            Video Category:<br/>
            <input type="text" ref="category" />
          </div>
          <div>
            Video Length  :<br/>
            <input type="text" ref="length" />
          </div>
          <div>
            Current Time  :<br/>
            <input type="text" ref="timestmp" />
          </div>
          <button onClick={this.addVideo}>
            Add a Video
          </button>
          <button onClick={this.addRoom}>
            Add a Room
          </button>
        </div>

        <div id='email'>
          <br/>
          <h4>Add Email</h4>
          <div >
            <input type="text" ref="email" />
          </div>
          <div>
            <input type="text" ref="password" />
          </div>
          <button onClick={this.addUser}>
            Add email
          </button>
        </div>
      </div>
    )
  }
}
