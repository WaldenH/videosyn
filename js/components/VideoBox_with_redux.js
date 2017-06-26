import React          from "react"                  ;
import { connect  }   from "react-redux"            ;
import { autobind }   from 'core-decorators'        ;
import videojs        from 'video.js';
// var $ = require("jquery");

import {  updTime,
          doNoThing,
          stopVideo,
          statVideo }       from "../actions/RoomActions" ;

// import { CommentManager } from 'comment-core-library/build/CommentCoreLibrary';
// require('comment-core-library/build/style.css');

@connect((store) => {
  return {
    room: store.room
  }})
@autobind
export default class VideoBox extends React.Component {
  constructor(){
    super();
    this.state = {
      currentTime: '00:00',
      cm        :   null,
      myPlayer  :   null,
      // videoUrl  :   'http://cn-hbwh-cc-v-03.acgvideo.com/vg6/8/a0/15953105-1-hd.mp4?expires=1491631800&platform=pc&ssig=O8jx0_ABqR3Tie32XpMLVA&oi=3550607734&nfa=JegTJDC+uC6hmp9MGMEVog==&dynamic=1',
      videoUrl  :   'http://cn-gdfs1-cc.acgvideo.com/vg5/a/11/7757534-1.flv?expires=1494354900&platform=pc&ssig=RlI3afItvQxxrmkAuWIR9A&oi=3550607796&nfa=JegTJDC+uC6hmp9MGMEVog==&dynamic=1',
    };
  };

  componentWillMount(){
    // console.log("componentWillMount : ", this.props.room.currentstamp);
    // this.setState({ currentTime: 10 });
    // this.state.myPlayer.currentTime(this.state.currentTime);
  }

  ComponentDidUpdate(){
    console.log("ComponentDidUpdate");
  }

  componentWillReceiveProps(nextProps) {
    const will_time = nextProps.room.currentstamp;
    const curr_time = this.props.room.currentstamp;
    console.log("will time : ", will_time);
    console.log("curr time : ", curr_time);

    if ( will_time - curr_time > 2
        || will_time - curr_time < -2 ) {
          console.log("Time will syn to: ", will_time);
          this.gotoTime(will_time);
    }else {
      nextProps.room.currentstamp = curr_time;
      console.log("Time will not syn : ", curr_time);
    }

    const will_stat = nextProps.room.videoState;
    const curr_stat = this.props.room.videoState;
    console.log("will state : ", will_stat);
    console.log("curr state : ", curr_stat);

    if (will_stat != curr_stat) {
        console.log("State not same ");
        if (will_stat == 'play') {
          // if ( will_time - curr_time > 1
          //         || will_time - curr_time < -1 ) {
            this.state.myPlayer.play();
          // }
        }else if (will_stat == 'stop') {
          this.state.myPlayer.pause();
      }
    }
  }

  componentDidMount() {
    // var cm = new CommentManager(document.getElementById('commentCanvas'));
    this.state.myPlayer = videojs( "test_video_1", {},
    function () {
      // this.on('pause', function(event) {  console.log('Event Pause!!: '); });
    });

    this.state.myPlayer.on('canplay',
      ()=>
        this.state.myPlayer.currentTime(this.props.room.currentstamp)
    );

    this.state.myPlayer.on('pause', event =>
      {
        console.log("Pause in VideoBox");
        this.updateTime();
        this.stop_video();
      }
    );

    this.state.myPlayer.on('play', event =>
      {
        console.log("Video play:", this.state.myPlayer.currentTime());
        this.stat_video();
      }
    );

    this.props.dispatch(doNoThing());

    setTimeout(() => {
      this.props.dispatch(doNoThing())
    }, 500);
  }

  updateTime() {
    const currrnt_time = this.state.myPlayer.currentTime();
    console.log("Time when stop: ", currrnt_time);
    this.setState({ currentTime: currrnt_time });
    this.props.dispatch(updTime(currrnt_time));
  }

  stop_video(){
    this.props.dispatch(stopVideo());
  }

  stat_video(){
    this.props.dispatch(statVideo());
  }

  getTime(){}

  autoRefresh(){
    setTimeout(() => {
      this.props.dispatch(doNoThing())
    }, 500);
  }

  gotoTime(time){
    // console.log("goto time :", time);
    this.state.myPlayer.currentTime(time);
  }

  render(){
    return(
      <div>
        <div id="commentCanvas" class="container" ></div>
        <video  id = 'test_video_1'
          className="video-js vjs-default-skin"
          controls
          preload="auto"
          width="640">
          <source src = {this.state.videoUrl} type='video/flv' />
        </video><br/>
        <div>
          <button onClick  = { this.updateTime  }>
            Get Current Time!
          </button>
          <br/>
          <div>
            State Time:   {this.state.currentTime}
          </div>
          <div>
            Firebase time: {this.props.room.currentstamp}
          </div>
          <button onClick  = { ()=> {
              this.getTime;
            } }>
            Get time from state and reducer!
          </button>
          <button onClick  = { this.gotoTime }>
            Jump to 10s
          </button>
          <button onClick  = { this.autoRefresh }>
            Start auto refresh!
          </button>

        </div>
      </div>
    );
  }
}





























//
// import React          from "react"                  ;
// import { autobind }   from 'core-decorators'        ;
// import videojs        from 'video.js';
//
// import { updTime  }       from "../actions/RoomActions" ;
//
// @autobind
// export default class VideoBox extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       currentTime: '00:00',
//       cm        :   null,
//       myPlayer  :   null,
//       videoUrl  :   'https://video-subtitle.tedcdn.com/talk/podcast/2015X/None/CaseyBrown_2015X-480p-en.mp4',
//     };
//   };
//
//   componentWillMount(){};
//
//   componentDidMount() {
//     this.state.myPlayer = videojs( "test_video_1", {},
//     function () {
//     });
//
//     this.state.myPlayer.on('canplay',
//       ()=>
//         this.state.myPlayer.currentTime(10)
//     );
//   }
//
//   render(){
//     return(
//       <div>
//         <video  id = 'test_video_1'
//           className="video-js vjs-default-skin"
//           controls
//           preload="auto"
//           width="640">
//
//           <source
//             src = {this.state.videoUrl} type='video/mp4'
//             />
//         </video><br/>
//       </div>
//     );
//   }
// }
