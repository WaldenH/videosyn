import React          from "react";
import { connect }    from "react-redux"
import { autobind }   from 'core-decorators';

import Header         from "../components/Header.js";
import { addChannel } from "../actions/ChannelsActions"

@connect((store) => {
  return {
    channels: store.channels.channels
  }})
@autobind
export default class PChannelsControler extends React.Component {
  constructor(){
    super();
    this.state = {
      channelName: '',
    }
  };

  handleChange(e) {
    this.setState({
      channelName: e.target.value
    });
  }

  addChannel() {
    this.props.dispatch(addChannel(this.state.channelName));
  }

  render(){
    const { channels } = this.props;

    const mappedChannels = channels.map((channel,i) => <li key={i}>{channel.name}</li>)

    return(
      <div>
        <Header></Header>
        <li>Channel Name:</li>
        <input  value    = { this.state.channelName }
                onChange = { this.handleChange    } /><br/>
        <button onClick={this.addChannel}>
          Create a Channel!
        </button><br/><br/>
        <ul>{ mappedChannels }</ul>
      </div>
    );
  }
}
