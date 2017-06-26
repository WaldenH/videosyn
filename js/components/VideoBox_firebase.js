import React          from 'react'                  ;
import { connect  }   from 'react-redux'            ;
import { autobind }   from 'core-decorators'        ;
import videojs        from 'video.js';

import { firebase as fireconfig } from "../config.js"
import * as firebase from 'firebase';

@autobind
export default class VideoBox extends React.Component {
  constructor(){
    super();
    this.state = {
      roomsList   : '',
      roomRef     : '',
      currentTime : '',
      myPlayer    : '',
      state       : '',
      fbtrig      : '',
      user        : 'a',
      fromfb      : '',
      videoUrl    : 'http://hk-hkbn7.acgvideo.com/vg8/a/a9/7757534-1.mp4?expires=1496239800&platform=pc&ssig=Rz1vwjo_uSXjVZXLxYHlWw&oi=3732844561&nfa=zn2OTN7O9p3rqnr0+3S2RQ==&dynamic=1&hfa=2065532129',
    };
  };

  componentWillMount(){}

  ComponentDidUpdate(){}

  componentDidMount() {
    firebase.initializeApp(fireconfig);
    const roomsRefObject  =
      firebase.database().ref().child('rooms');
    const roomRef         =
      roomsRefObject.orderByChild('video').equalTo('Violet Evergarden');

    var rst;

    roomRef.on('value', snap =>
    {
      var rooms = snap.val();
      const roomsList =  Object.keys(rooms).map(
        (key, id) => {
          this.setState({ roomRef: roomsRefObject.child(key) });
          if (rooms[key].actby != this.state.user) {

            rst = this.triggerSyn(
              rooms[key].timestmp,
              rooms[key].state,
              rooms[key].actby);

            return (
              <div key={key}>
                <li>video name: { rooms[key].video }  </li>
                length:         { rooms[key].length } <br/>
                current time:   { rooms[key].timestmp } <br/>
                state:          { rooms[key].state }    <br/>
            </div>);

          }
        });

      this.setState({ roomsList: roomsList });
    });

    // var cm = new CommentManager(document.getElementById('commentCanvas'));
    this.state.myPlayer = videojs( 'test_video_1', {}, function () {});

    this.state.myPlayer.on('canplay', ()=>{});

    this.state.myPlayer.on('pause', event => { this.stopVideo() } );

    this.state.myPlayer.on('play', event  => { this.playVideo() } );

    setTimeout(() => {}, 500);
  }

  stopVideo(){
    if (this.state.state != 'stop') {
      this.setState({
        state      : 'stop',
        currentTime: this.state.myPlayer.currentTime() });

      console.log(this.state.myPlayer.currentTime());

      if (this.state.fromfb == 'X') {
        this.setState({fromfb:''});
        return;
      }

      this.state.roomRef.update({
        timestmp: this.state.currentTime,
        state   : 'stop',
        actby   : this.state.user
      });
    }
  }

  playVideo(){
    if (this.state.state != 'play') {
      this.setState({state: 'play'});

      console.log(this.state.myPlayer.currentTime());

      if (this.state.fromfb == 'X') {
        this.setState({fromfb:''});
        return;
      }

      this.state.roomRef.update({
        timestmp: this.state.myPlayer.currentTime(),
        state   : 'play',
        actby   : this.state.user,
      });
    }
  }

  jumpVideo(){}

  triggerSyn( time , state, user){
    console.log(this.state.myPlayer.currentTime(time));
    if ( this.state.user == user || state == this.state.state ){
      return 1;
    }

    this.setState({fromfb: 'X'});

    if (state =='play') {
      this.synPlay(time);
    }else if ( state =='stop' ) {
      this.synStop(time);
   }
  }

  synTime(time){
    this.state.myPlayer.currentTime(time);
  }

  synStop(time){
    this.setState({state: 'stop'});
    this.state.myPlayer.currentTime(time);
    this.state.myPlayer.pause();
  }

  synPlay(time){
    this.setState({state: 'play'});
    this.state.myPlayer.currentTime(time);
    this.state.myPlayer.play();
  }

  synJump(){}

  synPulse(){}

  setUser(){
    const { user } = this.refs;
    this.setState({user: user.value})
  }

  setAndPlay(){
    this.state.myPlayer.currentTime('9');
    this.setState({fromfb: 'X'});
    // this.state.myPlayer.play();
  }

  render(){
    return(
      <div>
        <h2>Hi, {this.state.user}</h2>
        <h3>Rooms: </h3>
        <div id='commentCanvas' class='container' ></div>
        <video  id = 'test_video_1'
          className='video-js vjs-default-skin'
          controls
          preload='auto'
          width='640'>
          <source src = {this.state.videoUrl} type='video/flv' />
        </video><br/>
          <div>State Time:   {this.state.myPlayer.currentTime}</div>
          <h3>FireBase Time:</h3>
          <div> { this.state.roomsList } </div>
          <input type="text" ref="user" />
          <button onClick={this.setUser}>
            Change User
          </button>
          <button onClick={this.setAndPlay}>
            Set and play
          </button>
      </div>
    );
  }
}
