import React          from "react";
import { connect  }   from "react-redux";
import { autobind }   from 'core-decorators';

import Video          from './Video';

@connect((store) => {
  return {
    videos: store.videos.videos
  }})
@autobind
export default class Videos extends React.Component {
  constructor(){
    super();
  }

  render(){
    const { videos } = this.props;
    const mappedVideos = videos.map((video,i) =>
    {
      // console.log(video);
      return <Video key={i}{...video} />;
    });

    return(
      <div>
        <div>{ mappedVideos }</div>
      </div>
    );
  }
}
