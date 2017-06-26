import React          from "react"          ;
import { connect }    from "react-redux"    ;
import { autobind }   from 'core-decorators';

import Header         from "../components/Header" ;
import Rooms          from "../components/Rooms"  ;

@autobind
export default class PVideoRooms extends React.Component {
  constructor(){
    super();
  };

  render(){
    return(
      <div>
        <Header></Header>
        <Rooms></Rooms>
      </div>
    )
  }
}
