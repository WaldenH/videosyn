import React        from "react";
import {Link}       from "react-router";
import { autobind } from 'core-decorators';

import Header             from "../components/Header.js";
import Videos             from "../components/Videos";

@autobind
export default class PChannel extends React.Component {
  constructor(){
    super();
  };

  componentWillMount(){}

  componentWillUnmount(){}

  render(){

    return(
      <div>
        <Header></Header>
        <Videos></Videos>
      </div>
    );
  }
}
