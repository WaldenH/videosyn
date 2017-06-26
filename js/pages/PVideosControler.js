import React        from "react";
import { connect  } from "react-redux"
import { autobind } from 'core-decorators';

import Header       from "../components/Header.js";
import { addVideo } from "../actions/VideosActions";

@connect((store) => {
  return {
    videos: store.videos.videos
  }})
@autobind
export default class PVideosControler extends React.Component {
  constructor(){
    super();
    this.state = {
      videoName :   '',
      count     :    1,
    }
  };

  handleChange(e) {
    this.setState({
      videoName: e.target.value
    });
  }

  componentWillReceiveProps() {
    console.log("componentWillReceiveProps : ");
  }

  addVideo() {
    this.props.dispatch(addVideo(this.state.videoName));
    this.setState({
      count:  2
    });
  }

  render(){
    const { videos } = this.props;

    const mappedVideos = videos.map((video,i) => <li key={i}>{video.name}</li>)

    return(
      <div>
        <Header></Header>

        <li>Video Name:</li>
        <input  value    = { this.state.videoName }
                onChange = { this.handleChange    } />
        <br/>
        <button onClick  = {this.addVideo   }>
          Create a Video!
        </button><br/><br/>
        <ul>{mappedVideos}</ul>
        <div>{this.state.count}</div>
      </div>
    );
  }
}
