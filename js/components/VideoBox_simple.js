import React          from 'react'                  ;
import { autobind }   from 'core-decorators'        ;
import videojs        from 'video.js';

@autobind
export default class VideoBox extends React.Component {
  constructor(){
    super();
    this.state = {
      myPlayer    : '',
      videoUrl    : 'http://hk-hkbn6.acgvideo.com/vg1/2/71/7757534-1.mp4?expires=1496670300&platform=pc&ssig=QUeMemjJycwUelgJsWmM0A&oi=3732844561&nfa=zn2OTN7O9p3rqnr0+3S2RQ==&dynamic=1&hfa=2063996225',
    };
  };

  componentDidMount() {
    this.state.myPlayer = videojs( 'test_video_1', {}, function () {});
    console.log('componentDidMount');
  }

  setAndPlay(){
    const time = 10;
    this.state.myPlayer.currentTime(time);
  }

  render(){
    return(
      <div>
        <video  id = 'test_video_1'
          className='video-js vjs-default-skin'
          controls
          preload='auto'
          width='640'>
          <source src = {this.state.videoUrl} type='video/flv' />
        </video><br/>
          <button onClick={this.setAndPlay}>
            Set and play
          </button>
      </div>
    );
  }
}
