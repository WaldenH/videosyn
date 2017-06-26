import React          from "react"              ;
import { connect    } from "react-redux"        ;
import { autobind   } from 'core-decorators'    ;

import Channel              from "./Channel";

@connect((store) => {
  return {
    channels: store.channels.channels
  }})
@autobind
export default class Channels extends React.Component {
  constructor(){
    super();
  }

  componentWillMount(){
  }

  componentWillUnmount(){
  }

  render(){
    const { channels } = this.props;
    const mappedChannels = channels.map((channel,i)=>{
      return <Channel key={i}{...channel} />;
    });

    return(
      <div>
        {mappedChannels}
      </div>
    );
  }
}
