import React          from "react"              ;
import { connect    } from "react-redux"        ;
import { autobind   } from 'core-decorators'    ;

import Room           from "./Room"             ;

@connect((store) => {
  return {
    rooms: store.rooms.rooms
  }})
@autobind
export default class PVideoRooms extends React.Component {
  constructor(){
    super();
  };

  render(){
    const { rooms }   = this.props;
    const mappedRooms = rooms.map(
      (room,i)=>{
        return <Room key={i}{...room} />;
    });

    return(
      <ul>{ mappedRooms }</ul>
    )
  }
}
