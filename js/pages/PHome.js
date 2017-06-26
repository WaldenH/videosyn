import React from "react";
import { Link } from "react-router";

import Channels from "../components/Channels";
import Header   from "../components/Header";

export default class PHome extends React.Component {
  constructor(){
    super();
    this.state = {
      id: 'Layout',
    };
  }

  render(){
    return (
      <div>
        <Header></Header>
        <Channels></Channels>
      </div>
    );
  }
}
